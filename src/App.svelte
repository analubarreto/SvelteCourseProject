<script>
  import Header from './UI/Header.svelte'
  import MeetupGrid from './Meetups/MeetupGrid.svelte'
  import TextInput from './UI/TextInput.svelte'
  import Button from './UI/Button.svelte'

  let title = ''
  let subtitle = ''
  let address = ''
  let description = ''
  let imageUrl = ''
  let email = ''

  let meetups = [
    {
      id: 'm1',
      title: 'Coding Bootcamp',
      subtitle: 'Learn to code in 2 hours',
      description: 'In this meetup, we will have some experts to teach you how to code',
      imageUrl: 'http://placekitten.com/200/300',
      address: '27th Nerd Road, 32523 New York',
      contactEmail: 'code@test.com',
      isFavorite: false
    },
    {
      id: 'm2',
      title: 'Swim Together',
      subtitle: 'Let\'s swimm',
      description: 'Swimming rounds',
      imageUrl: 'http://placekitten.com/200/300',
      address: '27th Nerd Road, 32523 New York',
      contactEmail: 'swim@test.com',
      isFavorite: false
    }
  ]

  const addMeetup = () => {
    const newMeetup = {
      id: Math.random().toString(),
      title: title,
      subtitle: subtitle,
      description: description,
      imageUrl: imageUrl,
      contactEmail: email,
      address: address
    }

    meetups = [newMeetup, ...meetups]
  }

  const toggleFavorite = e => {
    const id = e.detail
    // copying the meetup we're updating
    const updatedMeetup = {...meetups.find(m => { m.id === id }) }
    updatedMeetup.isFavorite = !updatedMeetup.isFavorite
    // copying whole meetups array
    const meetupIndex = meetups.findIndex(m => m.id === id)
    const updatedMeetups = [...meetups]
    // update meetups array with copied meetups
  }
</script>

<style>
  main {
    margin-top: 5rem;
  }

  form {
    width: 30em;
    max-width: 90%;
    margin: auto;
  }
</style>

<Header />

<main>
  <form on:submit|preventDefault={addMeetup}>

    <TextInput 
      id="title"
      label="Title"
      value={title}
      on:input={e => (title = e.target.value)}
    />
    <TextInput 
      id="subtitle"
      label="Subtitle"
      value={subtitle}
      on:input={e => (subtitle = e.target.value)}
    />
    <TextInput 
      id="address"
      label="Address"
      value={address}
      on:input={e => (address = e.target.value)}
    />
    <TextInput 
      id="imageUrl"
      label="Image URL"
      value={imageUrl}
      on:input={e => imageUrl = e.target.value}
    />
    <TextInput 
      id="email"
      label="E-mail"
      value={email}
      type='email'
      on:input={e => (email = e.target.value)}
    />
    <TextInput 
      id="description"
      label="Description"
      value={description}
      controlType='textarea'
      on:input={e => (description = e.target.value)}
      rows='3'
    />

    <Button type="submit" caption="Save" />
  </form>
  <MeetupGrid {meetups} on:toggleFavorite={toggleFavorite} />
</main>
