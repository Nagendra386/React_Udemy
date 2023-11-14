import React from 'react'
import TabButton from '../TabButton'
import { EXAMPLES } from '../../data';
import { useState } from 'react';
import Section from '../Section';

const Examples = () => {
    const [selectedTopic, setSelectedTopic] = useState();
{/**Creating call back function in parent component and passing it as props to child component*/}
  function handleSelect(selectedButton) {
   
    setSelectedTopic(selectedButton.toLowerCase());
    
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <Section title="Examples" id="examples">
          {/** children props passing the content between starting tag and closing tag */}
          <menu>
            <TabButton
              isSelected={selectedTopic === 'components'}
              onSelect={handleSelect}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'jsx'}
              onSelect={handleSelect}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'props'}
              onSelect={handleSelect}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'state'}
              onSelect={handleSelect}
            >
              State
            </TabButton>
          </menu>
          {tabContent}
        </Section>
  )
}

export default Examples
