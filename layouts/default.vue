<template>
  <div>
    <main>
      
      <client-only>
      <Nuxt/>
    </client-only>
    </main>
    <AppFooter/>
  </div>
</template>
<script>
export default {
  layout: "mainLayout",
};
</script>
