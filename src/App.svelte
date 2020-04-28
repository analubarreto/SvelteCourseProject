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
      contactEmail: 'code@test.com'
    },
    {
      id: 'm2',
      title: 'Swim Together',
      subtitle: 'Let\'s swimm',
      description: 'Swimming rounds',
      imageUrl: 'http://placekitten.com/200/300',
      address: '27th Nerd Road, 32523 New York',
      contactEmail: 'swim@test.com'
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
</script>

<style>
  .meetups {
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
      type='text'
      on:input={e => (title = e.target.value)}
    />
    <TextInput 
      id="subtitle"
      label="Subtitle"
      value={subtitle}
      type='text'
      on:input={e => (subtitle = e.target.value)}
    />
    <TextInput 
      id="address"
      label="Address"
      value={address}
      type='text'
      on:input={e => (address = e.target.value)}
    />
    <TextInput 
      id="imageUrl"
      label="Image URL"
      value={imageUrl}
      type='text'
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
  <MeetupGrid {meetups} />
</main>
