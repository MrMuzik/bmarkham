import { c as create_ssr_component, e as escape, f as each, v as validate_component } from "../../../chunks/ssr.js";
const Job = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title, location, date, description } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.location === void 0 && $$bindings.location && location !== void 0)
    $$bindings.location(location);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  return `<div class="job"><p class="job-title text-lg font-headline font-bold">${escape(title)}</p> <p class="job-location">${escape(location)}</p> <p class="job-date">${escape(date)}</p> <p class="job-description">${escape(description)}</p></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const groupize = {
    title: "Senior Software Engineer",
    location: "Groupize; Beverly, MA",
    date: "April 2022 - Present",
    description: "I serve as the sole front-end resource in collaboration with several back-end Ruby engineers to develop exceptional digital experiences customized to our client's requirements. In addition, I am responsible for consulting with our C-level management and design team to develop visual designs and business requirements."
  };
  const tkxs = {
    title: "Senior Front-End Developer",
    location: "TKXS; Charlotte, NC",
    date: "June 2019 - April 2022",
    description: "I was responsible for translating wireframes, visual designs, and business requirements into exceptional digital experiences in modern UI/UX frameworks including React.js. I managed an offshore team of UI/UX front-end engineers building responsive JavaScript single-page applications."
  };
  const acbj = {
    title: "Front-End Engineer",
    location: "American City Business Journals; Charlotte, NC",
    date: "December 2013 - June 2019",
    description: "I was responsible for creating innovative products for our users and stakeholders using Agile development. I collaborated with other developers on solutions and enforced coding standards through peer code reviews. I effectively communicated technical solutions and recommendations to stakeholders to create world-class user experiences."
  };
  const redventures = {
    title: "Front-End Developer",
    location: "Red Ventures; Fort Mill, SC",
    date: "May 2013 - December 2013",
    description: "I was responsible for optimizing functionality on existing client websites to provide increased value to users and stakeholders. I collaborated with other developers, designers, and copywriters to develop marketplaces for a variety of high-profile partners."
  };
  const experian = {
    title: "Senior Software Engineer",
    location: "Experian Consumer Services; Costa Mesa, CA",
    date: "August 2012 - May 2013",
    description: "I served as an independent publisher and led the implementation of content solutions in all forms to drive brand goals and objectives. I collaborated with senior management to develop functional requirement documents and user support documents for custom CMS implementations. I drove brand engagement and marketing initiatives through customized content solutions."
  };
  const electricvisual = {
    title: "Web Director",
    location: "Electric Visual, LLC; San Clemente, CA",
    date: "July 2009 - August 2012",
    description: "I was responsible for communicating technical solutions and recommendations to non-technical C-level management. I planned, communicated, and developed the company's first HTML website. I established the company's first social media accounts and communication standards."
  };
  const jobList = [groupize, tkxs, acbj, redventures, experian, electricvisual];
  return `<div class="container mx-auto p-5 flex-1"><section><h1 class="text-xl mb-4 font-brandname font-black" data-svelte-h="svelte-m8edci">Experience</h1> ${each(jobList, (job) => {
    return `${validate_component(Job, "Job").$$render($$result, Object.assign({}, job), {}, {})}`;
  })}</section> <section class="mt-6" data-svelte-h="svelte-t7lx1n"><h1 class="text-xl mb-4 font-brandname font-black">Education</h1> <p><strong>The Art Institute of Las Vegas, Las Vegas, NV</strong> — Bachelor of Science, Interactive Media Design (Computer Science Equivalent), 2006.</p></section> <section class="mt-6" data-svelte-h="svelte-iaesa5"><h1 class="text-xl mb-4 font-brandname font-black">Skills</h1> <p><strong>Languages:</strong> JavaScript, HTML5, CSS3, PHP</p> <p><strong>Software:</strong> Git, Figma, VS Code, WordPress</p> <p><strong>Frameworks:</strong> React, Vue.js, Ruby on Rails</p> <p><strong>Development:</strong> Agile development, Problem-solving, Strong communication</p> <section></section></section></div>`;
});
export {
  Page as default
};
