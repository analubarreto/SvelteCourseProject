<script>
	import MeetupDetails from './Meetups/MeetupDetails.svelte';
  import Header from './UI/Header.svelte'
  import MeetupGrid from './Meetups/MeetupGrid.svelte'
  import EditMeetup from './Meetups/EditMeetup.svelte'

  import TextInput from './UI/TextInput.svelte'
  import Button from './UI/Button.svelte'

  import { meetups, customMeetupsStore } from './Meetups/meetups-store.js'

  let editMode = null
  let page = 'overview'
  let pageData = {}

  function addMeetup(event) {
    editMode = null
  }

  function cancelEdit() {
    editMode = null
  }

  function showDetails(event) {
    page = 'details'
    pageData.id = event.detail
  }

  function closeDetails() {
    page = 'overview'
    pageData = {}
  }
</script>

<style>
  main {
    margin-top: 5rem;
  }
  .meetup-controls {
    margin: 1rem;
  }
</style>

<Header />

<main>
  {#if page === 'overview'}
    <div class="meetup-controls">

    </div>
    <Button on:click={() => editMode = 'add'}>New Meetup</Button>
    {#if editMode === 'add'}
      <EditMeetup on:save={addMeetup} on:cancel={cancelEdit} />
    {/if}
    <MeetupGrid meetups={$meetups} on:showDetails={showDetails} />
  {:else}
    <MeetupDetails id={pageData.id} on:close={closeDetails} />
  {/if}
</main>
