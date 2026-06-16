import _React from 'react';
import { TextInput, Button, Group, Textarea, Space, Title, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const SERVICE_ID = 'service_lkjsw0q';
const TEMPLATE_ID = 'template_jsuxyqs';
const USER_ID = 'MQJOBWitXlCEmK8l6';

function ContactMeForm() {
    const form = useForm({
        initialValues: {
            reply_to: '',
            from_name: '',
            message: '',
        },
        validate: {
            reply_to: (value: string) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            from_name: (value: string) => (value.length > 0 ? null : 'Name is required'),
            message: (value: string) => (value.length > 0 ? null : 'Message is required'),
        },
    });

    const handleOnSubmit = () => {
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, '#contact-form', USER_ID).then(
            () => {
                Swal.fire({ icon: 'success', title: 'Message sent' });
            },
            (error) => {
                Swal.fire({ icon: 'error', title: 'Something went wrong', text: error.text });
            },
        );
        form.reset();
    };

    return (
        <div
            style={{
                padding: '24px',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
            }}
        >
            <Title order={4} mb={4} style={{ letterSpacing: '-0.01em' }}>
                Send a note
            </Title>
            <Text c="dimmed" size="sm" mb="md">
                Quickest reply via email, but feel free to drop a line here.
            </Text>
            <form id="contact-form" onSubmit={form.onSubmit(() => handleOnSubmit())}>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                        gap: 12,
                    }}
                >
                    <TextInput
                        withAsterisk
                        label="Email"
                        name="reply_to"
                        placeholder="you@email.com"
                        {...form.getInputProps('reply_to')}
                    />
                    <TextInput
                        withAsterisk
                        label="Name"
                        placeholder="Jane Doe"
                        name="from_name"
                        {...form.getInputProps('from_name')}
                    />
                </div>
                <Space h="sm" />
                <Textarea
                    withAsterisk
                    label="Message"
                    placeholder="Type your message here..."
                    name="message"
                    minRows={4}
                    {...form.getInputProps('message')}
                />
                <Group position="right" mt="md">
                    <Button type="submit">Send</Button>
                </Group>
            </form>
        </div>
    );
}

export default ContactMeForm;
