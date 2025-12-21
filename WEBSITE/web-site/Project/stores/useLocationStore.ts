import { defineStore } from 'pinia';
import type { ILocation } from '~/types';
import { collection, getDocs, doc, setDoc } from 'firebase/firestore';
import { useUserStore } from './useUserStore';

export const useLocationStore = defineStore('location', {
  state: () => ({
    locations: [] as ILocation[],
    selectedLocation: null as ILocation | null,
  }),
  actions: {
    async fetchLocations() {
      // Fetch from Firebase
      try {
        const { $db } = useNuxtApp();
        if (!$db) return;

        const snaps = await getDocs(collection($db, 'locations'));
        this.locations = snaps.docs.map(d => ({ id: d.id, ...d.data() })) as ILocation[];

        if (this.locations.length === 0) {
          // Seed defaults if empty
          this.locations = [
            {
              id: '1',
              name: 'Bershka Madrid',
              address: 'Gran Via 25',
              latitude: 40.42,
              longitude: -3.70,
              city: 'Madrid',
              isOpen: true
            },
            {
              id: '2',
              name: 'Bershka Istanbul',
              address: 'Istiklal Cd',
              latitude: 41.00,
              longitude: 28.97,
              city: 'Istanbul',
              isOpen: true
            }
          ];
        }
      } catch (e) {
        console.error(e);
      }
    },
    async selectLocation(location: ILocation) {
      this.selectedLocation = location;

      // Write Scenario: Save preference to Firestore User Profile
      const userStore = useUserStore();
      if (userStore.user && userStore.user.uid) {
        const { $db } = useNuxtApp();
        if (!$db) return;

        try {
          const userRef = doc($db, 'users', userStore.user.uid);
          await setDoc(userRef, {
            preferences: {
              preferredLocationId: location.id,
              preferredLocationName: location.name
            }
          }, { merge: true });
          console.log('Location preference saved to Firestore');
        } catch (e) {
          console.error("Error saving location preference:", e);
        }
      }
    }
  },
});
