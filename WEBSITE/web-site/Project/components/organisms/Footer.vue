<template>
  <footer class="bg-secondary/20 text-secondary-foreground py-12 mt-12 border-t">
    <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h4 class="font-bold mb-4 uppercase text-sm">Help</h4>
        <ul class="space-y-2 text-sm text-muted-foreground">
          <li><a href="#" class="hover:underline">Shop Online</a></li>
          <li><a href="#" class="hover:underline">Payment</a></li>
          <li><a href="#" class="hover:underline">Shipping</a></li>
          <li><a href="#" class="hover:underline">Returns</a></li>
        </ul>
      </div>
      <div>
        <h4 class="font-bold mb-4 uppercase text-sm">Company</h4>
         <ul class="space-y-2 text-sm text-muted-foreground">
          <li><a href="#" class="hover:underline">About Us</a></li>
          <li><a href="#" class="hover:underline">Careers</a></li>
          <li><a href="#" class="hover:underline">Sustainability</a></li>
        </ul>
      </div>
      <div>
         <h4 class="font-bold mb-4 uppercase text-sm">Social</h4>
          <ul class="space-y-2 text-sm text-muted-foreground">
			<li><a href="#" class="hover:underline">Instagram</a></li>
			<li><a href="#" class="hover:underline">TikTok</a></li>
			<li><a href="#" class="hover:underline">Spotify</a></li>
        </ul>
      </div>
      <div>
        <h4 class="font-bold mb-4 uppercase text-sm">Newsletter</h4>
        <div class="flex gap-2">
            <AtomsInput placeholder="Enter your email" class="bg-background" />
            <AtomsButton>Subscribe</AtomsButton>
        </div>
      </div>
    </div>
    <div class="container mx-auto px-4 mt-12 text-center text-xs text-muted-foreground">
        &copy; {{ new Date().getFullYear() }} Bershka Clone. Academic Project.
    </div>
  </footer>
</template>

<script setup lang="ts">
// Organism Footer
</script>
