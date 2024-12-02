import {
    AccordionItem,
    AccordionItemContent,
    AccordionItemTrigger,
    AccordionRoot,
  } from "../components/ui/accordion"

const AccordionComponent = () => {
    const items = [
        { value: "a", title: "First Item", text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Dictumst bibendum potenti magnis porttitor phasellus natoque platea volutpat conubia. Pretium vitae tempus luctus tincidunt magna orci taciti feugiat. Eget mi erat fames mi fermentum urna congue. Senectus ridiculus pretium ligula dapibus sit." },
        { value: "b", title: "Second Item", text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Dictumst bibendum potenti magnis porttitor phasellus natoque platea volutpat conubia. Pretium vitae tempus luctus tincidunt magna orci taciti feugiat. Eget mi erat fames mi fermentum urna congue. Senectus ridiculus pretium ligula dapibus sit." },
        { value: "c", title: "Third Item", text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Dictumst bibendum potenti magnis porttitor phasellus natoque platea volutpat conubia. Pretium vitae tempus luctus tincidunt magna orci taciti feugiat. Eget mi erat fames mi fermentum urna congue. Senectus ridiculus pretium ligula dapibus sit." },
        { value: "d", title: "Fuorth Item", text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Dictumst bibendum potenti magnis porttitor phasellus natoque platea volutpat conubia. Pretium vitae tempus luctus tincidunt magna orci taciti feugiat. Eget mi erat fames mi fermentum urna congue. Senectus ridiculus pretium ligula dapibus sit." }
      ];

    return (
        <AccordionRoot collapsible defaultValue={["b"]}>
            {items.map((item, index) => (
                <AccordionItem key={index} value={item.value}>
                <AccordionItemTrigger>{item.title}</AccordionItemTrigger>
                <AccordionItemContent>{item.text}</AccordionItemContent>
                </AccordionItem>
            ))}
    </AccordionRoot>
    );
}

export default AccordionComponent;