import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

interface Props {
    action: string;
}

interface FormSubmission {
    FirstName: string;
    Surname: string;
    Email: string;
}

interface Response {
    message: string;
    status: 'idle' | 'processing' | 'error' | 'success';
}

export default function SubscribeForm({ action }: Props): React.ReactElement {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const [serverErrors, setServerErrors] = useState([]);

    const [response, setResponse] = useState<Response>({
        message: '',
        status: 'idle',
    });

    async function onSubmit(data: FormSubmission) {
        setResponse({
            message: '',
            status: 'processing',
        });

        const res = await axios.post(action, data);

        if (res.data.errors) {
            setServerErrors(res.data.errors);

            setResponse({
                message: 'Oops! Something went wrong.',
                status: 'error',
            });
        } else {
            setResponse({
                message: 'Thanks for subscribing!',
                status: 'success',
            });

            reset();
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {serverErrors.length > 0 && (
                <ul className="text-red-500">
                    {serverErrors.map((err, i) => (
                        <li key={i}>{err}</li>
                    ))}
                </ul>
            )}

            <label htmlFor="FirstName">
                First name
                <input type="text" id="FirstName" {...register('FirstName', { required: true })} />
                {errors.FirstName && <div className="text-red-500">This field is required</div>}
            </label>
            <label htmlFor="Surname">
                Last name
                <input type="text" id="Surname" {...register('Surname', { required: true })} />
                {errors.Surname && <div className="text-red-500">This field is required</div>}
            </label>
            <label htmlFor="Email">
                Email address
                <input type="email" id="Email" {...register('Email', { required: true })} />
                {errors.Email && <div className="text-red-500">This field is required</div>}
            </label>
            <input
                type="submit"
                value={response.status === 'processing' ? 'Please wait..' : 'Subscribe'}
                disabled={response.status === 'processing'}
            />

            {response.message && (
                <div className={response.status === 'success' ? 'text-green-400' : 'text-red-500'}>
                    {response.message}
                </div>
            )}
        </form>
    );
}
