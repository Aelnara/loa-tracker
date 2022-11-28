/** @jsxImportSource @emotion/react */
import React from 'react';
import { styled } from '@mui/material/styles';
import { css } from '@emotion/react';
import Colors from '../../constants/Colors';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';

const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: Colors.WHITE,
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: Colors.WHITE,
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderTopWidth: 3,
        borderRadius: 1,
    },
}));

const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
        color: Colors.WHITE,
    }),
    '& .QontoStepIcon-completedIcon': {
        color: Colors.WHITE,
        zIndex: 1,
        fontSize: 18,
    },
    '& .QontoStepIcon-circle': {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
    },
}));

function QontoStepIcon(props: StepIconProps) {
    const { active, completed, className } = props;

    return (
        <QontoStepIconRoot ownerState={{ active }} className={className}>
            {completed ? <Check className="QontoStepIcon-completedIcon" /> : <div className="QontoStepIcon-circle" />}
        </QontoStepIconRoot>
    );
}

const DayProgression: React.FC = () => {
    const steps = ['WED', 'THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE'];
    const day = new Date().getDay();
    const shiftedDay = day + 4 > 6 ? 0 + (day - 3) : day + 4;

    return (
        <Stepper css={stepperStyles} alternativeLabel activeStep={shiftedDay} connector={<QontoConnector />}>
            {steps.map((label) => (
                <Step key={label}>
                    <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
                </Step>
            ))}
        </Stepper>
    );
};

const stepperStyles = css`
    width: 400px;
`;

export default DayProgression;
