import { useState } from 'react';
import './advicesAccordion.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb as solidBulb } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb as regularBulb } from '@fortawesome/free-regular-svg-icons';

function AdvicesAccordion() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const advices = [
        {
            title: "Acknowledge Your Struggles",
            content: "The first step to healing is acknowledging that you are struggling. It takes immense courage to admit that you need help, and it’s a powerful step towards recovery. Recognize that this journey is yours, and only you can take the first step, but you don't have to walk it alone."
        },
        {
            title: "Reach Out for Support",
            content: "Whether it's through a professional counselor, a support group, or trusted friends and family, don't hesitate to reach out. Surround yourself with people who care about your well-being and who will support you through the highs and lows. Emotional support is crucial to maintaining your strength and resilience."
        },
        {
            title: "Take It One Day at a Time",
            content: "Recovery is a journey, not a destination. Focus on taking one step at a time and celebrate the small victories along the way. Remember, each day is a new opportunity to grow and improve. Keep your goals realistic and attainable to avoid overwhelming yourself."
        },
        {
            title: "Practice Self-Care",
            content: "Make time for activities that bring you joy and relaxation. Whether it’s exercise, reading, or meditation, self-care is crucial for maintaining your mental health and staying on the path to recovery. Self-care isn't selfish—it's necessary to recharge and keep moving forward."
        },
        {
            title: "Avoid Triggers",
            content: "Identify the people, places, or situations that trigger your cravings or stress, and try to avoid them. Creating a safe environment is key to maintaining your progress. Have a plan in place for how to deal with triggers when they arise—whether it's calling a friend, going for a walk, or practicing deep breathing."
        },
        {
            title: "Be Patient with Yourself",
            content: "Recovery is a process, and it’s normal to have setbacks. Don’t be too hard on yourself if things don’t go as planned. Each setback is an opportunity to learn more about yourself and your needs. Keep pushing forward and remind yourself that healing takes time, and every step forward counts."
        },
        {
            title: "Stay Connected",
            content: "Isolation can make your struggles feel even harder to bear. Stay connected with loved ones and participate in community activities, even if it’s just online. Building a strong support network is essential for long-term success in recovery."
        },
        {
            title: "Set Realistic Goals",
            content: "Setting achievable goals gives you something to work toward and can keep you motivated during tough times. Break down your larger goals into smaller, manageable tasks, and reward yourself for reaching them. This approach can help you stay focused and positive."
        },
        {
            title: "Find a Healthy Outlet",
            content: "Channel your energy into positive activities that keep your mind and body engaged. Whether it's art, sports, volunteering, or learning a new skill, finding a healthy outlet can help you cope with stress and keep your thoughts on the right track."
        }
    ];

    return (
        <div className="advices">
            <h2>Helpful Advice for Your Journey</h2>
            <div className="accordion">
                {advices.map((advice, index) => (
                    <div key={index} className="accordion-item">
                        <div 
                            className={`accordion-title ${activeIndex === index ? 'active' : ''}`} 
                            onClick={() => toggleAccordion(index)}
                        >
                            <FontAwesomeIcon 
                                icon={activeIndex === index ? solidBulb : regularBulb} 
                                className="accordion-icon" 
                            />
                            {advice.title}
                        </div>
                        {activeIndex === index && (
                            <div className="accordion-content active">
                                {advice.content}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AdvicesAccordion;