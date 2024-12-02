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
import Cookies from 'js-cookie';

const CookiesConfirm = () => {
    const [open, setOpen] = useState(true);

    useEffect(() => {
        setOpen(true);
    }, []);

    // Accept cookies
    const handleAcceptCookies = () => {
        Cookies.set('username', 'Pasindu', { expires: 7 });
        console.log("Cookies Accepted");
        setOpen(false);
    };

    // Reject cookies
    const handleRejectCookies = () => {
        console.log("Cookies Rejected");
        setOpen(false);
    };

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
                        <Button variant="outline" onClick={handleRejectCookies}>Reject Cookies</Button>
                    </DialogActionTrigger>
                    <Button onClick={handleAcceptCookies}>Accept All Cookies</Button>
                </DialogFooter>
                <DialogCloseTrigger />
            </DialogContent>
        </DialogRoot>
    );

    
};

export default CookiesConfirm;