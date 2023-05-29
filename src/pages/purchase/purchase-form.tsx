import Typography from '@mui/material/Typography';
import { PurchaseForm } from '@presentation/components/organisms';
import { NarrowStack } from '@presentation/components/templates';
import { useAuth } from '@presentation/hooks';
import { useEffect } from 'react';
import type { FieldValues } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export function PurchasePage(): JSX.Element {
    const { user, isLoading } = useAuth();
    const navigate = useNavigate();
    const onSubmit = (formData: FieldValues) => {
        console.log('FORM DATA: ', formData);
    };

    useEffect(() => {
        if (!user && !isLoading) {
            navigate('/login');
        }
    }, [user, isLoading, navigate]);

    return (
        <NarrowStack title="COMPRA">
            <Typography align="center" variant="h6">
                Detalla lo más específico posible.
            </Typography>
            <PurchaseForm onSubmit={onSubmit} />
        </NarrowStack>
    );
}
