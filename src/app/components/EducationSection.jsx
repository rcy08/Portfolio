// EducationSection.js
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import SchoolIcon from '@mui/icons-material/School';

import { educations, imageLoader, educationHeader } from '../constants';
import { useTheme } from '../context/ThemeContext';
import { useDevice } from '../context/DeviceContext';

const EducationCard = ({ education, isMobile }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  return (
    <div ref={ref} className="vertical-timeline-element">
      <VerticalTimelineElement
        contentStyle={{
          background: "#1d1836",
          color: "#fff",
        }}
        contentArrowStyle={{ borderRight: "7px solid #232631" }}
        date={education.date}
        dateClassName={{
          color: isMobile ? "white" : "black"
        }}
        iconStyle={{ background: education.iconBg }}
        icon={
          <button
            className="flex justify-center items-center w-full h-full bg-[#e4e4e7] rounded-[50%]"
            onClick={() => window.open(education.url, '_blank')}
          >
            <Image
              loader={imageLoader}
              src={education.icon}
              alt={education.name}
              width={30}
              height={30}
              className="w-[75%] h-[75%] object-contain"
            />
          </button>
        }
        visible={inView}
      >
        <button
          onClick={() => window.open(education.url, '_blank')}
          className="w-full h-full text-left"
        >
          <div>
            <h3 className="text-white text-[24px] font-bold mb-4">
              {education.title}
            </h3>
            <p className="text-white text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
              {education.name}
            </p>
          </div>

          <ul className="mt-5 list-disc ml-5 space-y-2">
            {education.points.map((point, index) => (
              <li key={`education-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
                {point}
              </li>
            ))}
          </ul>
        </button>
      </VerticalTimelineElement>
    </div>
  );
};

const EducationSection = () => {
  const { theme } = useTheme();
  const { isMobile } = useDevice();

  return (
    <section className="text-white sm:mb-36" id="education">
      <h2 className="text-center text-4xl font-bold mt-4 mb-8 md:mb-16">
        <SchoolIcon className="scale-[200%] mr-3 pb-[2px]" />
        {educationHeader}
      </h2>
      <div className="mt-20 flex flex-col mb-20">
        <VerticalTimeline
          animate={!isMobile}
          lineColor={theme === 'light' ? '#1d1836' : '#e4e4e7'}
        >
          {educations.map((education, index) => (
            <EducationCard key={`education-${index}`} education={education} isMobile={isMobile} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default EducationSection;