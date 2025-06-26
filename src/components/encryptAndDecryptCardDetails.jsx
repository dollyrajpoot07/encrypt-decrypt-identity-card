'use client';
import React, { useState } from 'react';
import styles from './encryptAndDecryptCardDetails.module.css';
import users from '../../public/users.json'

export default function EncryptAndDecryptCardDetails() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [isDecrypted, setIsDecrypted] = useState(false);

    const currentUser = users[currentIndex];

    const maskEmail = (email) => {
        const [user, domain] = email.split('@');
        if (user.length <= 2) return `${user[0]}${'*'.repeat(6)}@${domain}`;
        return `${user[0]}${'*'.repeat(6)}${user[user.length - 1]}@${domain}`;
    };

    const maskIdentity = (identity) => `XXXX XX XXXX ${identity.slice(-4)}`;

    const maskPhone = (phone) => `+91 XXXXXXX${phone.slice(-4)}`;

    const maskDOB = () => '**/**/****';

    const maskAddress = (address) => {
        const parts = address.split(',');
        const visible = parts.slice(-3).join(',').trim();
        return `XXXXXXXX ${visible}`;
    };

    const handleCardClick = () => {
        setIsDecrypted(!isDecrypted);
    };

    const handleDoubleClick = () => {
        setIsFlipped(!isFlipped);
        setIsDecrypted(false); // reset on flip
    };

    const handleSelect = (index) => {
        setCurrentIndex(index);
        setIsFlipped(false);
        setIsDecrypted(false);
    };

    const previousCard = () => {
        if (currentIndex > 0) handleSelect(currentIndex - 1);
    };

    const nextCard = () => {
        if (currentIndex < users.length - 1) handleSelect(currentIndex + 1);
    };

    return (
        <div className={styles.wrapper}>
            <h2>Identity Card Viewer</h2>
            <div
                className={styles.card}
                onClick={handleCardClick}
                onDoubleClick={handleDoubleClick}
            >
                <h2>Identity Card</h2>
                {!isFlipped ? (
                    <div className={styles.frontContent}>
                        <div className={styles.row}>
                            <img src={currentUser.image} alt="User" className={styles.image} />
                            <div className={styles.details}>
                                <h3>{currentUser.name}</h3>
                                <p>DOB: {isDecrypted ? currentUser.dob : maskDOB()}</p>
                                <p>Gender: {currentUser.gender}</p>
                                <p>Email: {isDecrypted ? currentUser.email : maskEmail(currentUser.email)}</p>
                            </div>
                        </div>
                        <div className={styles.identity}>
                            {isDecrypted ? currentUser.identityNumber : maskIdentity(currentUser.identityNumber)}
                        </div>
                    </div>
                ) : (
                    <div className={styles.backContent}>
                        <p>Address: {isDecrypted ? currentUser.address : maskAddress(currentUser.address)}</p>
                        <p>Phone: {isDecrypted ? `+91 ${currentUser.phoneNumber}` : maskPhone(currentUser.phoneNumber)}</p>
                        <div className={styles.identity}>
                            {isDecrypted ? currentUser.identityNumber : maskIdentity(currentUser.identityNumber)}
                        </div>
                    </div>
                )}
            </div>

            <div className={styles.navigation}>
                <button onClick={previousCard} disabled={currentIndex === 0}> ⇤ Previous </button>
                <button onClick={() => setIsFlipped(!isFlipped)}> ⎋ Flip </button>
                <button onClick={nextCard} disabled={currentIndex === users.length - 1}> Next ⇥ </button>
            </div>

            <div className={styles.selector}>
                {users.map((user, index) => (
                    <button
                        key={user.id}
                        className={`${styles.userBtn} ${index === currentIndex ? styles.active : ''}`}
                        onClick={() => handleSelect(index)}
                    >
                        {user.name.split(' ')[0]}
                    </button>
                ))}
            </div>
        </div>
    );
}