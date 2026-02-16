import DotGrid from '../Bits/Dotgrid';
import ServiceCards from './ServiceCards';
import SelectedWork from './SelectedWork';
import Partners from './Partners';
import LetsTalk from './LetsTalk';

function Services() {
    return (
        <section className="w-full relative px-4 pt-20 md:pt-32  flex flex-col gap-12">
            {/* Section Header */}
            <div className=" inline-block w-full self-start">
                <div className='w-full flex mb-10 justify-center items-center' style={{ width: 'full', height: '200px', position: 'absolute' }}>
                    <DotGrid
                        dotSize={2}
                        gap={15}
                        baseColor="#271E37"
                        activeColor="#5227FF"
                        proximity={150}
                        shockRadius={250}
                        shockStrength={5}
                        resistance={750}
                        returnDuration={1.5}
                    >
                    </DotGrid>
                </div>

                <h2 className="text-6xl md:text-9xl mx-20 mt-10 font-normal  text-[#1a1a1a] relative">
                    Services
                </h2>
            </div>

            <ServiceCards />
            <SelectedWork />
            <Partners />
            <LetsTalk />
        </section>
    );
}

export default Services;
