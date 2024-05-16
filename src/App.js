import Accordion from './components/Accordion';

function App() {
  const items = [
    {
      id: '7845',
      label: 'Accordion one label',
      content: 'Accordion one content, Accordion one content, Accordion one content, Accordion one content, Accordion one content,  '
    },
    {
      id: '6487',
      label: 'Accordion two label',
      content: 'Accordion two content, Accordion two content, Accordion two content, Accordion two content, Accordion two content,  '
    },
    {
      id: '9524',
      label: 'Accordion three label',
      content: 'Accordion three content, Accordion three content, Accordion three content, Accordion three content, Accordion three content,  '
    },
  ];
  return (
    <Accordion items={items} />
    



  );
}

export default App;
