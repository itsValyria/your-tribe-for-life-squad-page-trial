<script>
export let data;
</script>

<ul>
  {#each data.persons as person}
  <li>
    <img
    class="main__card--background"
    src={person.avatar && person.avatar !== '' ? person.avatar : '/placeholder.jpg'}
    on:error="{() => this.src = '/placeholder.jpg'}"
    alt="{person.name}"
  />
  </li>
{/each}
</ul>

<style>

</style>