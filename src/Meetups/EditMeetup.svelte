<script>
  import { createEventDispatcher } from 'svelte'
  import TextInput from "../UI/TextInput.svelte";
  import Button from '../UI/Button.svelte';
  import Modal from '../UI/Modal.svelte'
  import { isEmpty, isEmail } from '../helpers/validation.js'

  let title = ''
  let titleValid = false
  let subtitle = ''
  let subtitleValid = false
  let address = ''
  let addressValid = false
  let email = ''
  let emailValid = false
  let description = ''
  let descriptionValid = false
  let imageUrl = ''
  let imageUrlValid = false
  let formIsValid = false

  const dispatch = createEventDispatcher()

  $: titleValid = !isEmpty(title)
  $: subtitleValid = !isEmpty(subtitle)
  $: addressValid = !isEmpty(address)
  $: emailValid = isEmail(email)
  $: descriptionValid = !isEmpty(description)
  $: imageUrlValid = !isEmpty(imageUrl)
  $: formIsValid = titleValid && 
                    subtitleValid && 
                    addressValid && 
                    emailValid && 
                    descriptionValid &&
                    imageUrlValid
  $: console.log(formIsValid)

  function submitForm() {
    dispatch('save', {
      title: title,
      subtitle: subtitle,
      address: address,
      email: email,
      description: description,
      imageUrl: imageUrl
    })
  }

  function cancel() {
    dispatch('cancel')
  }
</script>

<style>
  form {
    width: 100%;
  }
</style>

<Modal title="Edit Meetup Data" on:cancel>
  <form on:submit|preventDefault={submitForm} slot="content">
    <TextInput
      id="title"
      label="Title"
      valid={titleValid}
      validityMessage={"Title can't be empty"}
      value={title}
      on:input={event => (title = event.target.value)} />
    <TextInput
      id="subtitle"
      label="Subtitle"
      valid={subtitleValid}
      validityMessage={"Subtitle can't be empty"}
      value={subtitle}
      on:input={event => (subtitle = event.target.value)} />
    <TextInput
      id="address"
      label="Address"
      valid={addressValid}
      validityMessage={"Address can't be empty"}
      value={address}
      on:input={event => (address = event.target.value)} />
    <TextInput
      id="imageUrl"
      label="Image URL"
      valid={imageUrlValid}
      validityMessage={"Image has to have an"}
      value={imageUrl}
      on:input={event => (imageUrl = event.target.value)} />
    <TextInput
      id="email"
      label="E-Mail"
      valid={emailValid}
      validityMessage={"E-mail has to valid"}
      type="email"
      value={email}
      on:input={event => (email = event.target.value)} />
    <TextInput
      id="description"
      label="Description"
      valid={descriptionValid}
      validityMessage={"Description can't be empty"}
      controlType="textarea"
      value={description}
      rows = 3
      on:input={event => (description = event.target.value)} />
  </form>
  <div slot="footer">
    <Button type="button" mode="outline" on:click={cancel}>Cancel</Button>
    <Button type="button" on:click={submitForm} disabled={!formIsValid}>Save</Button>
  </div>
</Modal>