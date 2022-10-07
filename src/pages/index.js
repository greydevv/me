import Default from 'layouts/Default'
import BoxGraphic from 'components/BoxGraphic'
import me from 'public/me.jpg'
import Image from 'next/image'

export default function Home() {
  return (
    <Default>
      <div className="flex flex-col gap-y-24 pb-20">
        <div className="grid grid-cols-[1fr_300px] gap-x-8 mb-8">
          <div className="col-start-1 py-5">
            <h1 className="max-w-xl pb-8">
              I’m Greyson, an artist and computer science student.
            </h1>
            <p className="max-w-sm font-light">
              Based in southern Pennsylvania, I’m currently studying at Penn State
              University at University Park.
            </p>
          </div>
          <BoxGraphic className="col-start-2 w-full">
            <img src={ me.src } alt="me" className="w-full h-full object-cover" />
          </BoxGraphic>
        </div>
        <div className="grid grid-cols-[300px_1fr] gap-x-8 mb-8">
          <BoxGraphic
            left
            className="col-start-1 w-full aspect-square"
          >
            <img src={ me.src } className="h-full w-full object-cover"
            />
          </BoxGraphic>
          <div className="col-start-2 py-5">
            <h2 className="mb-5">
              About Me
            </h2>
            <div className="flex flex-col gap-y-4 max-w-sm font-light">
              <p>
                I’ve always been surrounded by art. Growing up in an artistically
                inclined family, it was only natural. I immediately took a liking
                to it and spent hundreds of hours creating.
              </p>
              <p>
                When I was introduced to my first computer, I was hooked - I instantly
                found was to combine my love for art and my new obsession with technology.
                Starting with games such as Minecraft and Terraria, I eventually stumbled
                across 3D modeling and VFX.
              </p>
              <p>
                After spending some time learning 3D in Blender, I wanted to create a plugin to
                enhance Blender. After playing around with Python in Blender's plugin
                editor, I was intrigued by what was possible to create. Since then, I've
                picked up computer science as a hobby, study, and a career.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Default>
  )
}
