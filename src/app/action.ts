"use server"

export async function getPosts() {
  return [
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
    { id: 3, title: "Post 3" }
  ]
}
