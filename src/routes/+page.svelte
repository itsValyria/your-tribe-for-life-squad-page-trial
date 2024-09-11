<script>
export let data;

function isValidImage(url) {
    // Checking of de image url wel valid is
    return /\.(jpg|jpeg|png|gif)$/i.test(url);
  }
</script>

<main>
  <ul>
    {#each data.persons.filter(person => person.squad_id === 3) as person}
    <li>
      <a href="/{person.id}">
          <img 
          class="card-image" 
          src={isValidImage(person.avatar) ? person.avatar : '/placeholder.jpg'} 
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
  li {
    background-color: var(--turquoise);
    color: var(--blueberry);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    width: 10em;
    height: 16em;
  }

  li .card-image {
    height: 8rem;
    width: 8rem;
    object-fit: cover;
    border-radius: 50%;
  }
</style>