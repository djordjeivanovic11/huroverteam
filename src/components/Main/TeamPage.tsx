import Image from 'next/image';

export default function TeamPage() {
  return (
    <div className='flex flex-col items-center p-6'>
      <h1 className='text-3xl font-bold mb-6'>Meet Our Teams</h1>
      <div className='grid grid-cols-2 gap-6'>
        {/* MechTeam */}
        <div className='text-center'>
          <h2 className='text-lg font-semibold mb-2'>Mech Team</h2>
          <Image
            src='/images/MechTeam.jpg'
            width={300}
            height={200}
            alt={'Mech'}
          />
        </div>

        {/* ElectricalTeam */}
        <div className='text-center'>
          <h2 className='text-lg font-semibold mb-2'>Electrical Team</h2>
          <Image
            src='/images/ElectricalTeam.jpg'
            width={300}
            height={200}
            alt={'Electrical'}
          />
        </div>

        {/* SoftwareTeam */}
        <div className='text-center'>
          <h2 className='text-lg font-semibold mb-2'>Software Team</h2>
          <Image
            src='/images/SoftwareTeam.jpg'
            width={300}
            height={200}
            alt={'Software'}
          />
        </div>

        {/* ScienceTeam */}
        <div className='text-center'>
          <h2 className='text-lg font-semibold mb-2'>Science Team</h2>
          <Image
            src='/images/ScienceTeam.jpg'
            width={300}
            height={200}
            alt={'Science Team'}
          />
        </div>
      </div>
    </div>
  );
}
