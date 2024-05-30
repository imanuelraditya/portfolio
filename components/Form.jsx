'use client'

import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import emailjs from '@emailjs/browser'
import { Snackbar, Alert } from '@mui/material'
import { useState, useRef } from 'react'
import { User, MailIcon, ArrowRightIcon, MessageSquare } from 'lucide-react'

const Form = () => {
    const [open, setOpen] = useState(false)
    const [error, setError] = useState('')
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_kyi2wbm', 'template_86fbizg', form.current, 'Dqb44SwOXCf1TBIZo')
            .then((result) => {
                console.log(result.text)
                setOpen(true)
                form.current.reset()
            }, (error) => {
                console.log(error.text)
                setError('Failed to send email')
                setOpen(true)
            })
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        setOpen(false)
    }

    return (
        <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-y-4'>
            <div className='relative flex items-center'>
                <Input type='text' id='name' name='from_name' placeholder='Name' required />
                <User className='absolute right-6' size={20} />
            </div>
            <div className='relative flex items-center'>
                <Input type='email' id='email' name='from_email' placeholder='Email' required />
                <MailIcon className='absolute right-6' size={20} />
            </div>
            <div className='relative flex items-center'>
                <Textarea placeholder='Type Your Message Here' name='message' required />
                <MessageSquare className='absolute top-4 right-6' size={20} />
            </div>
            <Button type='submit' value='send' className='flex items-center gap-x-1 max-w-[166px]'>
                Let's Talk
                <ArrowRightIcon size={20} />
            </Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={error ? 'error' : 'success'}>
                    {error ? error : 'Email Sent Successfully'}
                </Alert>
            </Snackbar>
        </form>
    )
}

export default Form
