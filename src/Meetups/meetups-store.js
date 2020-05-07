import { writable } from 'svelte/store'

export const meetups = writable([
  {
    id: "m1",
    title: "Coding Bootcamp",
    subtitle: "Learn to code in 2 hours",
    description:
      "In this meetup, we will have some experts that teach you how to code!",
    imageUrl:
      "https://picsum.photos/id/100/200/300",
    address: "27th Nerd Road, 32523 New York",
    contactEmail: "code@test.com",
    isFavorite: false
  },
  {
    id: "m2",
    title: "Swim Together",
    subtitle: "Let's go for some swimming",
    description: "We will simply swim some rounds!",
    imageUrl:
      "https://picsum.photos/id/1/200/300",
    address: "27th Nerd Road, 32523 New York",
    contactEmail: "swim@test.com",
    isFavorite: false
  }
])

export const customMeetupsStore = {
  subscribe: meetups.subscribe,
  addMeetup: meetupData => {
    const newMeetup = {
      ...meetupData,
      id: Math.random().toString(),
      isFavorite: false
    }
    meetups.update(items => {
      return [newMeetup, ...items]
    })
  },
  toggleFavorite: id => {
    meetups.update(items => {
      const updatedMeetup = { ...items.find(m => m.id === id) };
      updatedMeetup.isFavorite = !updatedMeetup.isFavorite;
      const meetupIndex = items.findIndex(m => m.id === id);
      const updatedMeetups = [...items];
      updatedMeetups[meetupIndex] = updatedMeetup;
      return updatedMeetups;
    })
  }
}