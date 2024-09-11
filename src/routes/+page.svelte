<script>
export let data;
</script>

<ul>
  {#each data.persons as person}
  <li>
    <img
    class="main__card--background"
    src={person.avatar && person.avatar !== '' ? person.avatar : 'assets/placeholder.jpg'}
    on:error="{() => this.src = 'assets/placeholder.jpg'}"
    alt="{person.name}"
  />
  </li>
{/each}
</ul>

<ul>
  {#each data.persons as person}
    <li>
      <strong>{person.name} {person.prefix} {person.surname}</strong>
      
      <!-- Check if avatar exists, else use a placeholder -->
      <img
        class="main__card--background"
        src={person.avatar && person.avatar !== '' ? person.avatar : 'assets/placeholder.jpg'}
        on:error="{() => this.src = 'assets/placeholder.jpg'}"
        alt="{person.name}"
      />
    </li>
  {/each}
</ul>

<style>

</style>