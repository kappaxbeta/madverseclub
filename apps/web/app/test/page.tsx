/**
 * v0 by Vercel.
 * @see https://v0.dev/t/xfLSF7Iu5JW
 */
import { Button } from  "@ui/components/button";
import { Input } from "@ui/components/input"
import { Card } from "@ui/components/card"

export default function IndexPage() {
  return (
    <div className="bg-[#141414] min-h-screen text-white">
      <div className="flex">
        <nav className="w-56 h-full bg-[#191919] p-5">
          <div className="flex items-center justify-between mb-10">
            <h1 className="text-xl font-bold">
              Active <span className="text-red-600">Access</span>
            </h1>
            <MenuIcon className="text-gray-400" />
          </div>
          <ul className="space-y-6">
            <li className="flex items-center space-x-3 text-red-600">
              <HomeIcon className="text-current" />
              <span>Home</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-400">
              <SearchIcon className="text-current" />
              <span>Search</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-400">
              <BookmarkIcon className="text-current" />
              <span>Watchlist</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-400">
              <StarIcon className="text-current" />
              <span>Favorites</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-400">
              <UserIcon className="text-current" />
              <span>Profile</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-400">
              <CogIcon className="text-current" />
              <span>Settings</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-400">
              <BellIcon className="text-current" />
              <span>Notifications</span>
            </li>
          </ul>
          <div className="absolute bottom-5">
            <Button className="bg-transparent text-gray-400">Log Out</Button>
          </div>
        </nav>
        <main className="flex-1 p-8">
          <div className="flex justify-between items-center mb-10">
            <ArrowLeftIcon className="text-gray-400" />
            <Input className="w-1/3 bg-[#191919] rounded-md pl-4" placeholder="Search movies" type="search" />
            <BellIcon className="text-gray-400" />
          </div>
          <section className="mb-10">
            <div className="relative">
              <img
                alt="The Soul Conductor"
                className="rounded-lg mb-4"
                height="240"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "640/240",
                  objectFit: "cover",
                }}
                width="640"
              />
              <div className="absolute top-4 left-4">
                <h2 className="text-4xl font-bold mb-2">The SOUL CONDUCTOR</h2>
                <div className="flex items-center space-x-2">
                  <Button className="bg-red-600">Watch</Button>
                  <PlusIcon className="text-gray-400" />
                  <ShareIcon className="text-gray-400" />
                </div>
                <p className="text-gray-400">4.5k viewers are watching</p>
              </div>
            </div>
          </section>
          <section className="mb-10">
            <h3 className="text-2xl font-bold mb-4">Parties</h3>
            <div className="flex space-x-4">
              <Card className="w-[160px]">
                <img
                  alt="Wonder Woman"
                  className="rounded-t-lg"
                  height="90"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "160/90",
                    objectFit: "cover",
                  }}
                  width="160"
                />
                <div className="p-2">
                  <h4 className="text-sm font-bold">Wonder Woman</h4>
                  <p className="text-xs text-gray-400">Adventure, Action</p>
                </div>
              </Card>
              <Card className="w-[160px]">
                <img
                  alt="World Engines"
                  className="rounded-t-lg"
                  height="90"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "160/90",
                    objectFit: "cover",
                  }}
                  width="160"
                />
                <div className="p-2">
                  <h4 className="text-sm font-bold">World Engines</h4>
                  <p className="text-xs text-gray-400">Science Fiction, Adventure</p>
                </div>
              </Card>
            </div>
          </section>
          <section>
            <h3 className="text-2xl font-bold mb-4">Continue Watching</h3>
            <div className="grid grid-cols-3 gap-4">
              <Card className="w-full">
                <img
                  alt="The Red Sea Diving Resort"
                  className="rounded-t-lg"
                  height="120"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "213/120",
                    objectFit: "cover",
                  }}
                  width="213"
                />
                <div className="p-2">
                  <h4 className="text-sm font-bold">The Red Sea Diving Resort</h4>
                  <p className="text-xs text-gray-400">Drama, Thriller</p>
                </div>
              </Card>
              <Card className="w-full">
                <img
                  alt="Extraction"
                  className="rounded-t-lg"
                  height="120"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "213/120",
                    objectFit: "cover",
                  }}
                  width="213"
                />
                <div className="p-2">
                  <h4 className="text-sm font-bold">Extraction</h4>
                  <p className="text-xs text-gray-400">Action, Thriller</p>
                </div>
              </Card>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

function ArrowLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}


function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function BookmarkIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </svg>
  )
}


function CogIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12 2v2" />
      <path d="M12 22v-2" />
      <path d="m17 20.66-1-1.73" />
      <path d="M11 10.27 7 3.34" />
      <path d="m20.66 17-1.73-1" />
      <path d="m3.34 7 1.73 1" />
      <path d="M14 12h8" />
      <path d="M2 12h2" />
      <path d="m20.66 7-1.73 1" />
      <path d="m3.34 17 1.73-1" />
      <path d="m17 3.34-1 1.73" />
      <path d="m11 13.73-4 6.93" />
    </svg>
  )
}


function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function ShareIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  )
}


function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}


function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
