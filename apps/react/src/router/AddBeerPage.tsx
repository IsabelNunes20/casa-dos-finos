import React from "react";
import { Link, Form, redirect } from "react-router-dom";

const AddBeerPage: React.FC = () => {
  return (
    <Form method="post">
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" name="body" required rows={3} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" name="name" required />
      </p>
      <p>
        <Link to=".." type="button">
          Cancel
        </Link>
        <button>Submit</button>
      </p>
    </Form>
  );
};

export default AddBeerPage;

export async function action({ request }) {
  const formData = await request.formData();
  const beerData = Object.fromEntries(formData);

  await fetch("https://6835d96bcd78db2058c36a1b.mockapi.io/beers/", {
    method: "POST",
    body: JSON.stringify(beerData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return redirect("/");
}
