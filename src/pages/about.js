import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import profilePic from '../../public/images/profile/Generic-Profile-Placeholder-v3.png'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'

const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, {once: true});
    
    useEffect(() => {
        if(isInView){
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= value ){
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])

    return <span ref={ref}></span>
}

const about = () => {

  return (
    <>
        <Head>
            <title>Samet Kabakçı | Hakkımda</title>
            <meta name="description" content="Portfolio web site" />
        </Head>
        <TransitionEffect />
        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text="Tutku, Amaçları Besler!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
                <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                    <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biyografi</h2>
                        <p className='font-medium'>
                            Merhaba, Ben Samet Kabakçı. Web geliştirici ve UI/UX tasarımcısı olarak görev yapıyorum ve güzel, fonksiyonel ve kullanıcı odaklı dijital deneyimler yaratma tutkusuna sahibim. 4 yıllık saha deneyimimle, müşterilerimin vizyonlarını hayata geçirmenin yeni ve yenilikçi yollarını arıyorum.
                        </p>
                        <p className='my-4 font-medium'>
                            İnanıyorum ki tasarım, sadece bir şeyleri güzel göstermekle ilgili değil, aynı zamanda problemleri çözmek ve kullanıcılar için sezgisel, keyifli deneyimler yaratmakla ilgilidir.
                        </p>
                        <p className='font-medium'>
                        Web sitesi, mobil uygulama veya diğer dijital ürün üzerinde çalışıyor olsam da, tasarım mükemmelliği ve kullanıcı odaklı düşünceye olan bağlılığımı her projeye taşıyorum. Becerilerimi ve tutkumu bir sonraki projenize getirme fırsatını dört gözle bekliyorum.
                        </p>
                    </div>
                    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1'>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
                        <Image src={profilePic} alt="SametKabakçı" className='w-full h-auto rounded-2xl' priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' />
                    </div>
                    <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                <AnimatedNumbers value={50} />+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:items-center md:text-lg sm:text-base xs:text-sm'>
                                Memnun müşteri
                            </h2>
                        </div>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimatedNumbers value={40} />+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:items-center md:text-lg sm:text-base xs:text-sm'>
                                Tamamlanan proje
                            </h2>
                        </div>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimatedNumbers value={4} />+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:items-center md:text-lg sm:text-base xs:text-sm'>
                                Yıllık tecrübe
                            </h2>
                        </div>
                    </div>
                </div>
                <Skills />
                <Experience />
                <Education />
            </Layout>
        </main>
    </>
  )
}

export default about