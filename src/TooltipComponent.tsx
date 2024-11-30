import React from 'react';
import { Button } from '@chakra-ui/react';
import { Tooltip } from "./components/ui/tooltip"

const TooltipComponent = ({ description }: { description: string }) => {
    return (
        <Tooltip showArrow content={description}>
            <Button variant="outline" size="sm">
                Add Item
            </Button>
        </Tooltip>
    );
};

export default TooltipComponent;