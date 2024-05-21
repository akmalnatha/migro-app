import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ProgressIndicatorProps {
    collected: number;
    goal: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ collected, goal }) => {
    const percentage = Math.min((collected / goal) * 100, 100);

    return (
        <View style={styles.container}>
            <View style={styles.progressContainer}>
                <View style={[styles.progressBar, { width: `${percentage}%` }]} />
            </View>
            <Text style={styles.text}>
                Rp {collected.toLocaleString()} collected out of Rp {goal.toLocaleString()}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    progressContainer: {
        height: 10,
        backgroundColor: '#d9d9d9',
        borderRadius: 25,
        overflow: 'hidden',
        marginBottom: 10,
    },
    progressBar: {
        height: '100%',
        backgroundColor: '#49ccb4',
        borderRadius: 25,
    },
    text: {
        fontSize: 14,
        color: '#3bc4cd',
        fontFamily: 'Roboto'
    },
});

export default ProgressIndicator;
