import FullCalendar from '../components/fullcalendar'
import Link from 'next/link'

export default function Calendar() {
  return (
    <div>
    <Link href="/">
      <a>Go to Index</a>
    </Link>
      <FullCalendar defaultView='dayGridMonth' />
    </div>
  );
}
