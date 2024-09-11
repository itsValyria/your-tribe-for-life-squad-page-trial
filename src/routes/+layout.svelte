<script>
  import '../global.css';
  // Hier komt gedeelde JavaScript logic voor elke pagina met deze lay-out
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">
</svelte:head>

<header>
  <!-- Hier komt de header / navigatie -->
</header>

<main>
  <slot /> <!-- Hier wordt de pagina content geimplementeerd-->
</main>

<footer>
  <!-- Hier komt de footer -->
</footer>

<style>
  /* Hier komt gedeelde styles voor elke pagina met deze lay-out */
</style>