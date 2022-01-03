import * as React from 'react';
import ToolbarHeader from '../components/ToolbarHeader';
import { CustomCSSProperties } from '../utils';

export default function Home() {
  return (
    <div
      style={
        {
          '--min-clamp': '500px',
          '--ideal-clamp': '60%',
          '--max-clamp': '900px',
        } as CustomCSSProperties
      }
      className="clamp-width mx-auto"
    >
      <ToolbarHeader />
      <main className="my-4 p-4">
        <p className="text-6xl font-medium">Hi I'm Sai</p>
        <p className="text-3xl font-medium">The SSH Guy</p>
        <p className="my-6">
          With a name like SSH, you probably came here expecting me to tell you
          about networking or security or some other third thing.
        </p>
        <p className="my-6">Sorry! I can't help you with that.</p>
        <p className="my-6">
          So what's up with the SSH? I'm sure you're dying to find out. Well, it
          turns out those are just my initials. Also, it sounds kind of cool and
          it rhymes.
        </p>
        <p className="my-6">
          Put it all together and we end up with you just as confused about what
          I do and me wasting a perfectly good elevator pitch trying to explain
          my name.
        </p>
        <p className="my-6">
          If you stuck with me for this long then here's what I do. I build
          things. Usually front end applications. Usually with React.
        </p>
        <p className="my-6">
          I'm currently building things at <strong>RSA Security</strong>.
        </p>
        <p className="my-6">
          And yes. Don't worry. The irony isn't lost on me.
        </p>
      </main>
    </div>
  );
}
