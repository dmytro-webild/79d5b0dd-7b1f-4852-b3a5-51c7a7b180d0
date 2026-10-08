import AboutTextSplit from '@/components/sections/about/AboutTextSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeaturesDetailedSteps from '@/components/sections/features/FeaturesDetailedSteps';
import HeroBrand from '@/components/sections/hero/HeroBrand';
import MetricsIconCards from '@/components/sections/metrics/MetricsIconCards';
import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';
import TestimonialTrustCard from '@/components/sections/testimonial/TestimonialTrustCard';
import { Award, CheckCircle, Zap } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBrand
      brand="Expert Plumbing Solutions You Can Trust"
      description="Omega Plumbing & Drain provides fast, reliable, and professional plumbing services for your home and business. From emergency leaks to routine maintenance, we do it all."
      primaryButton={{
        text: "Book Service",
        href: "#contact",
      }}
      secondaryButton={{
        text: "View Services",
        href: "#features",
      }}
      imageSrc="http://img.b2bpic.net/free-photo/female-plumber-working-fix-problems-client-s-house_23-2150990724.jpg"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutTextSplit
      title="Family Owned & Operated Since 1995"
      descriptions={[
        "At Omega Plumbing & Drain, we believe in doing the job right the first time. Our team of licensed and insured professionals handles every project with the utmost care, transparency, and efficiency.",
        "Our dedication to local service means we respond faster than the rest. We are proud to serve our community with honest pricing and expert results.",
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="features" data-section="features">
    <SectionErrorBoundary name="features">
          <FeaturesDetailedSteps
      tag="Our Services"
      title="Comprehensive Plumbing Care"
      description="Professional solutions for every plumbing need, big or small."
      steps={[
        {
          tag: "Fix",
          title: "Drain Cleaning",
          subtitle: "Clear blockages fast",
          description: "High-powered jetting and cable services to clear even the toughest obstructions.",
          imageSrc: "http://img.b2bpic.net/free-photo/housework-top-view-man-overalls-with-badge-crouching-near-sink_259150-58254.jpg",
        },
        {
          tag: "Upgrade",
          title: "Water Heaters",
          subtitle: "Hot water ready",
          description: "Installation and repair of tankless and traditional water heating systems.",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-hand-pressing-button_23-2149478474.jpg",
        },
        {
          tag: "Protect",
          title: "Emergency Repairs",
          subtitle: "24/7 Response",
          description: "Immediate dispatch for leaks, bursts, and flooding emergencies at any time.",
          imageSrc: "http://img.b2bpic.net/free-photo/volunteer-planting-trees-nature_1268-21661.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsIconCards
      tag="Trusted Quality"
      title="The Omega Advantage"
      description="Why homeowners choose our team for peace of mind."
      metrics={[
        {
          icon: Award,
          title: "Years Experience",
          value: "29+",
        },
        {
          icon: CheckCircle,
          title: "Homes Serviced",
          value: "15K+",
        },
        {
          icon: Zap,
          title: "Emergency Dispatch",
          value: "24/7",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="social-proof" data-section="social-proof">
    <SectionErrorBoundary name="social-proof">
          <SocialProofMarquee
      tag="Our Partners"
      title="Trusted by Local Leaders"
      description="Providing infrastructure support for local establishments."
      names={[
        "City Plaza",
        "Green Gardens HOA",
        "Blue River Real Estate",
        "Apex Realty Group",
        "Community Center Dist.",
        "Riverside Hospital",
        "Main Street Stores",
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialTrustCard
      quote="Omega Plumbing & Drain was a lifesaver when my main drain line burst at 2 AM. They were professional, fast, and didn't charge a fortune for after-hours work."
      rating={5}
      author="James Peterson, Homeowner"
      avatars={[
        {
          name: "Sarah",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-good-looking-thick-skinned-student-woman-with-curly-hair-casual-fashionable-clothes-looking-aside-smiling-brightfully-friend-outside-waiting-her-order-coffee-shop-life_176420-12327.jpg",
        },
        {
          name: "Michael",
          imageSrc: "http://img.b2bpic.net/free-photo/two-happy-male-female-business-people-showing-thumbs-up-outdoors_1262-12567.jpg",
        },
        {
          name: "Emily",
          imageSrc: "http://img.b2bpic.net/free-photo/service-maintenance-worker-repairing_23-2149176724.jpg",
        },
        {
          name: "David",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-black-manual-worker-shaking-hands-with-company-engineer-factory-plant_637285-4107.jpg",
        },
        {
          name: "Jessica",
          imageSrc: "http://img.b2bpic.net/free-photo/trendy-students-taking-photo_23-2147655789.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqSplitMedia
      tag="Need Help?"
      title="Frequently Asked Questions"
      description="Common answers to your plumbing concerns."
      items={[
        {
          question: "What areas do you serve?",
          answer: "We serve the entire tri-county metropolitan area, including suburban neighborhoods.",
        },
        {
          question: "Do you offer emergency weekend service?",
          answer: "Yes, our emergency team is on call 24/7, 365 days a year.",
        },
        {
          question: "Are your plumbers licensed?",
          answer: "Absolutely. All our technicians are fully licensed, bonded, and background-checked.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/plumber-making-ok-sign_1368-510.jpg"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Get In Touch"
      text="Ready to get your plumbing back on track? Give us a call or send a request online today."
      primaryButton={{
        text: "Call Now",
        href: "tel:5550123",
      }}
      secondaryButton={{
        text: "Contact Online",
        href: "mailto:hello@omegaplumbing.com",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
