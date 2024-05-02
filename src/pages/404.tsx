import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main>
      <center>
        <h1 className="text-2xl m-10">Page not found</h1>
        <p>
          Sorry, we couldn’t find what you were looking for 😔
          <br />
          <br />
          <Link className="text-primary underline hover:text-secondary" to="/">Go back to the main page</Link>
        </p>
      </center>
    </main>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
