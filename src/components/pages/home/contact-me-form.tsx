import React from 'react';
import { TextInput, Button, Group, Flex, Textarea, Space, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useMediaQuery } from '@mantine/hooks';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const SERVICE_ID = "service_lkjsw0q"
const TEMPLATE_ID = "template_jsuxyqs";
const USER_ID = "MQJOBWitXlCEmK8l6"
function ContactMeForm() {
    const matches = useMediaQuery('(max-width: 900px)');
    const form = useForm({
        initialValues: {
            reply_to: '',
            from_name: '',
            message: '',
        },

        validate: {
            reply_to: (value: string) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            from_name: (value: string) => value.length > 0 ? null : 'Name is required',
            message: (value: string) => value.length > 0 ? null : 'Message is required',
        },
    });
    const handleOnSubmit = () => {
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, '#contact-form', USER_ID).then((result) => {
            console.log(result.text);
            Swal.fire({
                icon: 'success',
                title: 'Message Sent Successfully'
            })
        }, (error) => {
            console.log(error.text);
            Swal.fire({
                icon: 'error',
                title: 'Oops, something went wrong',
                text: error.text,
            })
        });

        form.reset()
    };
    return (
        <Flex direction="column" style={{ marginTop: '2em', width: '100%' }}>
            <Title order={2} style={{ width: '100%' }}>Contact Me</Title>
            <form id="contact-form" style={{ width: '100%', textAlign: 'left' }} onSubmit={form.onSubmit(() => handleOnSubmit())}>
                <TextInput
                    withAsterisk
                    label="Email"
                    name="reply_to"
                    placeholder="your@email.com"
                    styles={{ root: { width: matches ? '100%' : '20%' } }}
                    {...form.getInputProps('reply_to')}
                />
                <Space h="md" />
                <TextInput
                    withAsterisk
                    label="Name"
                    placeholder="Jane Doe"
                    name="from_name"
                    styles={{ root: { width: matches ? '100%' : '20%' } }}
                    {...form.getInputProps('from_name')}
                />
                <Space h="md" />
                <Textarea
                    withAsterisk
                    label="Message"
                    placeholder="Type your message here..."
                    name="message"
                    styles={{ root: { width: '100%' } }}
                    {...form.getInputProps('message')}
                />

                <Group position="right" mt="md">
                    <Button type="submit">Submit</Button>
                </Group>
            </form>
        </Flex>
    )
}

export default ContactMeForm
