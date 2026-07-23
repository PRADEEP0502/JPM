import { useEffect, useMemo, useState } from "react";
import { motion, useInView, useMotionValueEvent, useScroll } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  ChevronUp,
  Droplets,
  Factory,
  Gauge,
  Globe2,
  HeartHandshake,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Microscope,
  PackageCheck,
  Phone,
  Recycle,
  Send,
  Shirt,
  Sparkles,
  Sprout,
  Users,
  Waves,
  X,
  Zap,
} from "lucide-react";
import { Route, Routes } from "react-router-dom";

const navItems = [
  "Home",
  "About",
  "Services",
  "Infrastructure",
  "Sustainability",
  "Gallery",
  "Careers",
  "Contact",
];

const visuals = {
  hero: "/assets/textile-factory-premium.png",
  about: "/assets/textile-factory-premium.png",
  machine: "/assets/textile-factory-premium.png",
  lab: "/assets/textile-factory-premium.png",
  fabric: "/assets/textile-factory-premium.png",
  rolls: "/assets/textile-factory-premium.png",
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

function scrollToId(label) {
  const element = document.getElementById(label.toLowerCase());
  element?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function SectionIntro({ eyebrow, title, copy, align = "center" }) {
  return (
    <motion.div
      className={`mx-auto max-w-3xl ${align === "center" ? "text-center" : ""}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <p className="mb-3 font-poppins text-sm font-semibold uppercase tracking-[0.2em] text-bluebrand">
        {eyebrow}
      </p>
      <h2 className="font-poppins text-3xl font-semibold leading-tight text-navy sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {copy && <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">{copy}</p>}
    </motion.div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => setScrolled(latest > 28));

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav
        className={`mx-auto flex w-[min(1180px,calc(100%-32px))] items-center justify-between rounded-2xl border px-4 py-3 backdrop-blur-xl transition-all duration-500 lg:px-5 ${
          scrolled
            ? "border-line bg-white/88 shadow-soft"
            : "border-white/20 bg-white/14 text-white shadow-none"
        }`}
        aria-label="Primary navigation"
      >
        <button
          className="flex items-center gap-3 text-left"
          onClick={() => scrollToId("Home")}
          aria-label="Junior Processing Mill home"
        >
          <span
            className={`grid h-10 w-10 place-items-center rounded-xl ${
              scrolled ? "bg-navy text-white" : "bg-white text-navy"
            }`}
          >
            JPM
          </span>
          <span>
            <span className="block font-poppins text-sm font-semibold leading-5">Junior Processing</span>
            <span className={`block text-xs ${scrolled ? "text-slate-500" : "text-white/72"}`}>Mill</span>
          </span>
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToId(item)}
              className={`rounded-xl px-3 py-2 text-sm font-medium transition ${
                scrolled ? "text-slate-700 hover:bg-slate-100" : "text-white/86 hover:bg-white/12"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <button
          className={`grid h-11 w-11 place-items-center rounded-xl lg:hidden ${
            scrolled ? "bg-slate-100 text-navy" : "bg-white/16 text-white"
          }`}
          onClick={() => setOpen(true)}
          aria-label="Open navigation menu"
        >
          <Menu size={20} />
        </button>
      </nav>

      {open && (
        <motion.div
          className="fixed inset-0 z-50 bg-navy/40 backdrop-blur-sm lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="ml-auto h-full w-[min(360px,86vw)] bg-white p-5 shadow-premium"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.45 }}
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="font-poppins font-semibold text-navy">Menu</span>
              <button className="grid h-10 w-10 place-items-center rounded-xl bg-mist" onClick={() => setOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <div className="grid gap-2">
              {navItems.map((item) => (
                <button
                  key={item}
                  className="rounded-xl px-4 py-3 text-left font-medium text-slate-700 hover:bg-mist"
                  onClick={() => {
                    setOpen(false);
                    scrollToId(item);
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-navy text-white">
      <div className="absolute inset-0">
        <img src={visuals.hero} alt="Modern textile production facility" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/78 to-navy/24" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(37,99,235,0.28),transparent_32%),linear-gradient(180deg,transparent,rgba(15,23,42,0.78))]" />
      </div>
      <motion.div
        className="absolute left-[8%] top-[18%] h-28 w-28 rounded-full border border-white/16"
        animate={{ y: [0, 18, 0], rotate: [0, 12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[18%] right-[12%] h-40 w-40 rounded-full border border-blue-300/20"
        animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.72, 0.35] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative z-10 mx-auto flex min-h-screen w-[min(1180px,calc(100%-32px))] items-center pt-28">
        <motion.div className="max-w-4xl" initial="hidden" animate="visible" variants={stagger}>
          <motion.p variants={fadeUp} className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-4 py-2 text-sm text-white/86 backdrop-blur-md">
            <Sparkles size={16} /> Tiruppur based textile processing partner
          </motion.p>
          <motion.h1 variants={fadeUp} className="font-poppins text-5xl font-semibold leading-[1.04] tracking-normal sm:text-6xl lg:text-7xl">
            Precision in Textile Processing
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
            Delivering high-quality textile dyeing and fabric processing solutions with innovation, consistency, and world-class manufacturing standards.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button onClick={() => scrollToId("Services")} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-bluebrand px-6 py-4 font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-blue-700">
              Explore Services <ArrowRight size={18} />
            </button>
            <button onClick={() => scrollToId("Contact")} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/24 bg-white/12 px-6 py-4 font-semibold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/20">
              Contact Us <Send size={18} />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Counter({ value, suffix = "", label }) {
  const [count, setCount] = useState(0);
  const ref = useMemo(() => ({ current: null }), []);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    let frame;
    const start = performance.now();
    const duration = 1500;
    const animate = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <div ref={ref} className="rounded-2xl border border-line bg-white p-6 shadow-soft">
      <p className="font-poppins text-4xl font-semibold text-navy">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-slate-500">{label}</p>
    </div>
  );
}

function About() {
  const values = ["Consistency", "Accountability", "Innovation", "Customer Focus"];

  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative">
            <img src={visuals.about} alt="Industrial textile facility interior" className="aspect-[4/5] w-full rounded-2xl object-cover object-center shadow-premium" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/24 bg-white/82 p-5 shadow-soft backdrop-blur-xl">
              <p className="font-poppins text-xl font-semibold text-navy">Global standards. Local expertise.</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">Purpose-built textile processing for brands, exporters, and manufacturing partners.</p>
            </div>
          </motion.div>
          <div>
            <SectionIntro
              align="left"
              eyebrow="About Junior Processing Mill"
              title="Modern textile processing built for precision, reliability, and scale."
              copy="Junior Processing Mill partners with garment manufacturers, exporters, and fabric suppliers to deliver dependable dyeing, finishing, inspection, and dispatch outcomes from Tiruppur's textile ecosystem."
            />
            <motion.div className="mt-8 grid gap-4 sm:grid-cols-2" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {[
                ["Mission", "To process every fabric order with disciplined quality, transparent timelines, and manufacturing consistency."],
                ["Vision", "To be a trusted textile processing partner for global customers seeking efficient, responsible production."],
              ].map(([title, copy]) => (
                <motion.div key={title} variants={fadeUp} className="rounded-2xl border border-line bg-mist p-6">
                  <h3 className="font-poppins text-lg font-semibold text-navy">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{copy}</p>
                </motion.div>
              ))}
            </motion.div>
            <motion.div className="mt-8" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h3 className="font-poppins text-lg font-semibold text-navy">Core Values</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {values.map((value) => (
                  <span key={value} className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-soft">
                    <Check size={16} className="text-bluebrand" /> {value}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Counter value={15} suffix="+" label="Years of Experience" />
          <Counter value={20} suffix="T" label="Daily Production Capacity" />
          <Counter value={120} suffix="+" label="Skilled Employees" />
          <Counter value={98} suffix="%" label="Customer Satisfaction" />
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    [Droplets, "Fabric Dyeing", "Controlled shade matching and consistent dye uptake across fabric lots."],
    [Waves, "Textile Processing", "Process flows designed for knit, woven, and custom fabric requirements."],
    [Microscope, "Quality Inspection", "Disciplined checks for shade, handle, appearance, and finish quality."],
    [Shirt, "Finishing", "Premium fabric finishing to support garment production and end-use performance."],
    [PackageCheck, "Packing & Dispatch", "Organized packing, labeling, and dispatch coordination for faster movement."],
    [BadgeCheck, "Custom Processing Solutions", "Flexible processing programs for specific brand, buyer, and export needs."],
  ];

  return (
    <section id="services" className="bg-mist py-24">
      <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
        <SectionIntro
          eyebrow="Services"
          title="Integrated fabric processing services for modern textile supply chains."
          copy="From dyeing to dispatch, each service is structured to improve consistency, reduce friction, and support dependable delivery."
        />
        <motion.div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {services.map(([Icon, title, copy]) => (
            <motion.article
              key={title}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.015 }}
              className="group rounded-2xl border border-line bg-white p-7 shadow-soft transition"
            >
              <div className="mb-7 grid h-14 w-14 place-items-center rounded-2xl bg-bluebrand/10 text-bluebrand transition group-hover:bg-bluebrand group-hover:text-white">
                <Icon size={26} />
              </div>
              <h3 className="font-poppins text-xl font-semibold text-navy">{title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{copy}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Infrastructure() {
  const items = [
    [visuals.machine, "object-[72%_50%]", Factory, "Advanced Machinery", "Modern processing equipment engineered for repeatable quality."],
    [visuals.rolls, "object-[54%_46%]", Users, "Skilled Workforce", "Experienced operators and supervisors across each production stage."],
    [visuals.fabric, "object-[36%_52%]", Gauge, "Modern Production Facility", "Organized floor movement from incoming fabric to final dispatch."],
    [visuals.lab, "object-[82%_48%]", Microscope, "Quality Testing Lab", "Structured inspection support for fabric quality and shade control."],
  ];

  return (
    <section id="infrastructure" className="bg-white py-24">
      <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
        <SectionIntro
          eyebrow="Infrastructure"
          title="Purpose-built manufacturing systems for dependable textile output."
          copy="A modern facility, trained teams, and quality controls work together to keep production clear, measurable, and business-ready."
        />
        <motion.div className="mt-14 grid gap-6 md:grid-cols-2" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {items.map(([src, position, Icon, title, copy]) => (
            <motion.article key={title} variants={fadeUp} className="overflow-hidden rounded-2xl border border-line bg-white shadow-soft">
              <div className="relative overflow-hidden">
                <img src={src} alt={title} className={`h-72 w-full object-cover transition duration-700 hover:scale-105 ${position}`} />
                <div className="absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-2xl bg-white/88 text-bluebrand backdrop-blur-md">
                  <Icon size={23} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-poppins text-xl font-semibold text-navy">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{copy}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Sustainability() {
  const pillars = [
    [Sprout, "Eco-Friendly Manufacturing"],
    [Recycle, "Water Recycling"],
    [Zap, "Energy Efficiency"],
    [Globe2, "Environmental Responsibility"],
  ];

  return (
    <section id="sustainability" className="overflow-hidden bg-navy py-24 text-white">
      <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionIntro
          align="left"
          eyebrow="Sustainability"
          title="Responsible processing with cleaner systems and practical discipline."
          copy="Junior Processing Mill approaches sustainability as an operating standard: careful resource usage, better process control, and continuous improvement across production."
        />
        <motion.div className="grid gap-4 sm:grid-cols-2" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {pillars.map(([Icon, title]) => (
            <motion.div key={title} variants={fadeUp} whileHover={{ y: -6 }} className="rounded-2xl border border-white/12 bg-white/8 p-6 backdrop-blur-md">
              <div className="mb-8 grid h-14 w-14 place-items-center rounded-2xl bg-bluebrand text-white">
                <Icon size={26} />
              </div>
              <h3 className="font-poppins text-xl font-semibold">{title}</h3>
              <p className="mt-3 leading-7 text-white/68">Measured improvements that support long-term customer confidence and cleaner textile production.</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Gallery() {
  const [active, setActive] = useState(null);
  const gallery = [
    ["Factory", visuals.about, "object-[48%_52%]"],
    ["Machines", visuals.machine, "object-[74%_50%]"],
    ["Production", visuals.rolls, "object-[58%_48%]"],
    ["Finished Fabrics", visuals.fabric, "object-[32%_54%]"],
    ["Factory", visuals.about, "object-[18%_52%]"],
    ["Machines", visuals.machine, "object-[86%_46%]"],
  ];

  return (
    <section id="gallery" className="bg-mist py-24">
      <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
        <SectionIntro
          eyebrow="Gallery"
          title="Inside the process: facilities, machines, production, and finished fabrics."
          copy="A clean visual look at the industrial systems behind precise textile processing."
        />
        <motion.div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {gallery.map(([category, src, position], index) => (
            <motion.button
              key={`${category}-${index}`}
              variants={fadeUp}
              className="group mb-5 block w-full overflow-hidden rounded-2xl border border-line bg-white text-left shadow-soft"
              onClick={() => setActive({ category, src })}
            >
              <div className="relative overflow-hidden">
                <img src={src} alt={`${category} at Junior Processing Mill`} className={`w-full object-cover transition duration-700 group-hover:scale-105 ${position} ${index % 3 === 0 ? "h-96" : "h-72"}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/62 to-transparent opacity-80" />
                <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-navy backdrop-blur-md">
                  {category}
                </span>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
      {active && (
        <motion.div className="fixed inset-0 z-[60] grid place-items-center bg-navy/86 p-4 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={() => setActive(null)}>
          <button className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-xl bg-white text-navy" aria-label="Close gallery image">
            <X size={20} />
          </button>
          <motion.img src={active.src} alt={active.category} className="max-h-[82vh] w-[min(980px,100%)] rounded-2xl object-contain shadow-premium" initial={{ scale: 0.94, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} />
        </motion.div>
      )}
    </section>
  );
}

function Careers() {
  const openings = ["Dyeing Supervisor", "Quality Inspector", "Machine Operator"];

  return (
    <section id="careers" className="bg-white py-24">
      <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionIntro
          align="left"
          eyebrow="Careers"
          title="Build disciplined textile careers with a team that values skill and ownership."
          copy="We look for people who care about process, quality, safety, and steady improvement on the production floor."
        />
        <motion.div className="rounded-2xl border border-line bg-mist p-6 shadow-soft" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="mb-6 flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-bluebrand text-white">
              <BriefcaseBusiness size={24} />
            </div>
            <h3 className="font-poppins text-2xl font-semibold text-navy">Current Openings</h3>
          </div>
          <div className="grid gap-3">
            {openings.map((opening) => (
              <div key={opening} className="flex items-center justify-between rounded-2xl border border-line bg-white p-4">
                <span className="font-medium text-slate-700">{opening}</span>
                <ArrowRight size={18} className="text-bluebrand" />
              </div>
            ))}
          </div>
          <button onClick={() => scrollToId("Contact")} className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-navy px-6 py-4 font-semibold text-white transition hover:-translate-y-0.5">
            Apply Now <Send size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-mist py-24">
      <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
        <SectionIntro
          eyebrow="Contact"
          title="Start a processing conversation with Junior Processing Mill."
          copy="Share your fabric, shade, finishing, or dispatch requirements and our team will respond with the next steps."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.form className="rounded-2xl border border-line bg-white p-6 shadow-soft" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="grid gap-4 sm:grid-cols-2">
              <input aria-label="Name" placeholder="Name" className="rounded-2xl border border-line px-4 py-4 outline-none transition focus:border-bluebrand" />
              <input aria-label="Email" type="email" placeholder="Email" className="rounded-2xl border border-line px-4 py-4 outline-none transition focus:border-bluebrand" />
              <input aria-label="Phone" placeholder="Phone" className="rounded-2xl border border-line px-4 py-4 outline-none transition focus:border-bluebrand" />
              <input aria-label="Company" placeholder="Company" className="rounded-2xl border border-line px-4 py-4 outline-none transition focus:border-bluebrand" />
            </div>
            <textarea aria-label="Message" placeholder="Processing requirement" rows="6" className="mt-4 w-full rounded-2xl border border-line px-4 py-4 outline-none transition focus:border-bluebrand" />
            <button type="button" className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-bluebrand px-6 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700">
              Send Inquiry <Send size={18} />
            </button>
          </motion.form>
          <motion.div className="grid gap-5" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} className="grid min-h-64 place-items-center rounded-2xl border border-line bg-white p-8 text-center shadow-soft">
              <MapPin size={36} className="text-bluebrand" />
              <p className="mt-4 font-poppins text-xl font-semibold text-navy">Tiruppur, India</p>
              <p className="mt-2 text-slate-500">Google Maps location placeholder</p>
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-2xl border border-line bg-white p-6 shadow-soft">
              {[
                [Mail, "Email", "info@juniorprocessingmill.com"],
                [Phone, "Phone", "+91 98765 43210"],
                [MapPin, "Address", "Tiruppur, Tamil Nadu, India"],
              ].map(([Icon, label, value]) => (
                <div key={label} className="flex gap-4 border-b border-line py-4 last:border-b-0">
                  <Icon className="mt-1 text-bluebrand" size={20} />
                  <div>
                    <p className="font-semibold text-navy">{label}</p>
                    <p className="mt-1 text-slate-600">{value}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy py-14 text-white">
      <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-10 md:grid-cols-4">
        <div>
          <p className="font-poppins text-xl font-semibold">Junior Processing Mill</p>
          <p className="mt-4 leading-7 text-white/62">Premium textile processing and fabric dyeing partner from Tiruppur, India.</p>
        </div>
        <div>
          <p className="font-semibold">Quick Links</p>
          <div className="mt-4 grid gap-2 text-white/62">
            {navItems.slice(0, 5).map((item) => (
              <button key={item} onClick={() => scrollToId(item)} className="w-fit hover:text-white">
                {item}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold">Services</p>
          <div className="mt-4 grid gap-2 text-white/62">
            {["Fabric Dyeing", "Textile Processing", "Finishing", "Packing & Dispatch"].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold">Contact Information</p>
          <p className="mt-4 text-white/62">Tiruppur, Tamil Nadu, India</p>
          <p className="mt-2 text-white/62">info@juniorprocessingmill.com</p>
          <div className="mt-5 flex gap-3">
            {[Linkedin, Instagram, HeartHandshake].map((Icon, index) => (
              <button key={index} className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-white transition hover:bg-bluebrand" aria-label="Social media link">
                <Icon size={18} />
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 w-[min(1180px,calc(100%-32px))] border-t border-white/12 pt-6 text-sm text-white/52">
        Copyright © {new Date().getFullYear()} Junior Processing Mill. All rights reserved.
      </div>
    </footer>
  );
}

function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      {visible && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-navy shadow-soft" aria-label="Back to top">
          <ChevronUp size={20} />
        </button>
      )}
      <a href="https://wa.me/919876543210" className="grid h-14 w-14 place-items-center rounded-2xl bg-[#25D366] text-white shadow-premium" aria-label="Chat on WhatsApp">
        <Phone size={22} />
      </a>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Infrastructure />
        <Sustainability />
        <Gallery />
        <Careers />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}
