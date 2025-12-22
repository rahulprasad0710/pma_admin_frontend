import A1 from "../../assets/avatar/a1.jpg";
import A2 from "../../assets/avatar/a2.jpg";
import A3 from "../../assets/avatar/a3.jpg";
import A4 from "../../assets/avatar/a4.jpg";
import A5 from "../../assets/avatar/a5.jpg";
import A6 from "../../assets/avatar/a6.jpg";
import Image from "@molecules/Image";

const Testimonial = () => {
    const testimonials = [
        {
            name: "Amit Sharma",
            role: "Project Manager",
            company: "TechNova Solutions",
            profilePic: A1,
            testimonial:
                "This software has completely streamlined how we manage projects and tasks. The real-time dashboard and reporting give us clear visibility, and the workflow tools help our team stay aligned and productive.",
        },
        {
            name: "Prem Verma",
            role: "Operations Lead",
            company: "InnovaWorks",
            profilePic: A2,
            testimonial:
                "The combination of project tracking, task boards, and team collaboration has significantly improved our delivery speed. Everything we need—from planning to execution—is now in one place.",
        },
        {
            name: "Rahul Mehta",
            role: "Team Lead",
            company: "CloudEdge",
            profilePic: A3,
            testimonial:
                "Managing tasks and collaborating with the team has never been easier. The chat, activity logs, and reminders ensure nothing falls through the cracks, even in fast-paced projects.",
        },
        {
            name: "Sneha Kapoor",
            role: "Product Owner",
            company: "BrightLabs",
            profilePic: A4,
            testimonial:
                "I love how intuitive and well-structured the platform is. From project dashboards to detailed task workflows, it helps us stay organized while maintaining full transparency across teams.",
        },
        {
            name: "Vikram Joshi",
            role: "HR & Admin Manager",
            company: "NextGen Corp",
            profilePic: A5,
            testimonial:
                "The user and team management features are extremely powerful. Role-based access and permissions make it easy to manage departments while keeping data secure and well-organized.",
        },
        {
            name: "Anjali Singh",
            role: "Founder",
            company: "Startup Hive",
            profilePic: A6,
            testimonial:
                "This platform has become the backbone of our operations. It keeps our projects on track, improves team collaboration, and gives us insights that help make better business decisions.",
        },
    ];
    const testimonialsArray = [0, 2, 4];

    return (
        <section
            id='testimonials'
            aria-label='What our customers are saying'
            className='bg-slate-50 py-20 sm:py-32'
        >
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='mx-auto max-w-2xl md:text-center'>
                    <h2 className='font-display text-3xl tracking-tight text-slate-900 sm:text-4xl'>
                        Loved by businesses worldwide.
                    </h2>
                    <p className='mt-4 text-lg tracking-tight text-slate-700'>
                        Our software is so simple that people can’t help but
                        fall in love with it. Simplicity is easy when you just
                        skip tons of mission-critical features.
                    </p>
                </div>
                <ul
                    role='list'
                    className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3'
                >
                    {testimonialsArray?.map((testimonial) => {
                        const index = testimonial;
                        return (
                            <li key={index}>
                                <ul
                                    role='list'
                                    className='flex flex-col gap-y-6 sm:gap-y-8'
                                >
                                    <li>
                                        <figure className='relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10'>
                                            <svg
                                                aria-hidden='true'
                                                width={105}
                                                height={78}
                                                className='absolute left-6 top-6 fill-slate-100'
                                            >
                                                <path d='M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z' />
                                            </svg>
                                            <blockquote className='relative'>
                                                <p className='text-lg tracking-tight text-slate-900'>
                                                    {
                                                        testimonials[index]
                                                            .testimonial
                                                    }
                                                </p>
                                            </blockquote>
                                            <figcaption className='relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6'>
                                                <div>
                                                    <div className='font-display text-base text-slate-900'>
                                                        {
                                                            testimonials[index]
                                                                .name
                                                        }
                                                    </div>
                                                    <div className='mt-1 text-sm text-slate-500'>
                                                        {
                                                            testimonials[index]
                                                                .role
                                                        }{" "}
                                                        |{" "}
                                                        {
                                                            testimonials[index]
                                                                .company
                                                        }
                                                    </div>
                                                </div>
                                                <div className='overflow-hidden rounded-full bg-slate-50'>
                                                    <Image
                                                        alt=''
                                                        loading='lazy'
                                                        width={56}
                                                        height={56}
                                                        decoding='async'
                                                        className='h-14 w-14 object-cover'
                                                        style={{
                                                            color: "transparent",
                                                        }}
                                                        src={
                                                            testimonials[index]
                                                                .profilePic
                                                        }
                                                    />
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </li>
                                    <li>
                                        <figure className='relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10'>
                                            <svg
                                                aria-hidden='true'
                                                width={105}
                                                height={78}
                                                className='absolute left-6 top-6 fill-slate-100'
                                            >
                                                <path d='M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z' />
                                            </svg>
                                            <blockquote className='relative'>
                                                <p className='text-lg tracking-tight text-slate-900'>
                                                    {
                                                        testimonials[index + 1]
                                                            .testimonial
                                                    }
                                                </p>
                                            </blockquote>
                                            <figcaption className='relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6'>
                                                <div>
                                                    <div className='font-display text-base text-slate-900'>
                                                        {
                                                            testimonials[
                                                                index + 1
                                                            ].name
                                                        }
                                                    </div>
                                                    <div className='mt-1 text-sm text-slate-500'>
                                                        {
                                                            testimonials[
                                                                index + 1
                                                            ].role
                                                        }
                                                        {"  "}|{" "}
                                                        {
                                                            testimonials[
                                                                index + 1
                                                            ].company
                                                        }
                                                    </div>
                                                </div>
                                                <div className='overflow-hidden rounded-full bg-slate-50'>
                                                    <Image
                                                        alt=''
                                                        loading='lazy'
                                                        width={56}
                                                        height={56}
                                                        decoding='async'
                                                        className='h-14 w-14 object-cover'
                                                        style={{
                                                            color: "transparent",
                                                        }}
                                                        src={
                                                            testimonials[
                                                                index + 1
                                                            ].profilePic
                                                        }
                                                    />
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </li>
                                </ul>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};

export default Testimonial;
