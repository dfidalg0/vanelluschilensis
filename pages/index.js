import "react";
import Link from 'next/link'

export default function Index() {
    return (
        <div>
        <Link href="/calendar">
          <a>Go to Calendar</a>
        </Link>
        </div>
    )
}
