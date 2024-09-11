<script>
  export let data;
</script>

<main>
  <ul>
    {#each data.persons.filter(person => person.squad_id === 3) as person}
    <li>
      <a href="/{person.id}">
          <img 
          class="card-image" 
          src={(person.avatar) ? person.avatar : '/placeholder.jpg'} 
          alt="{person.name}"
          on:error="{(event) => event.target.src = '/placeholder.jpg'}"
        />
        <h2>{person.name}</h2>
        <p>{person.prefix ? `${person.prefix} ${person.surname}` : person.surname}</p>
      </a>
    </li>
    {/each}
  </ul>
</main>

<style>
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  li {
    background-color: var(--turquoise);
    color: var(--blueberry);
    border-radius: 16px;
    padding: 1em;

    width: 10rem;
    height: 16rem;
    margin: 1rem;
  }

  li a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  li .card-image {
    height: 8rem;
    width: 8rem;
    object-fit: cover;
    border-radius: 50%;
  }
</style>