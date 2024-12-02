import { useState, useEffect } from "react";
import {
    DialogRoot,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogBody,
    DialogFooter,
    DialogActionTrigger,
    DialogCloseTrigger
} from "../components/ui/dialog";

import { Button } from "../components/ui/button"
import AccordionComponent from "./AccordionComponent";

const CookiesConfirm = () => {
    const [open, setOpen] = useState(true);

    useEffect(() => {
        setOpen(true);
    }, []);

    return (
        <DialogRoot lazyMount open={open} onOpenChange={(e) => setOpen(e.open)}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Cookies</DialogTitle>
                </DialogHeader>
                <DialogBody>
                    <AccordionComponent />
                </DialogBody>
                <DialogFooter>
                    <DialogActionTrigger asChild>
                        <Button variant="outline">Reject Cookies</Button>
                    </DialogActionTrigger>
                    <Button>Accept All Cookies</Button>
                </DialogFooter>
                <DialogCloseTrigger />
            </DialogContent>
        </DialogRoot>
    );
};

export default CookiesConfirm;