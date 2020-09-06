import React from 'react'
import { Link } from 'react-router-dom';

export const DashboardActions = () => {
    return (
        <div><div class="dash-buttons">
            <a href="create-profile.html" class="btn btn-light"
            ><i class="fas fa-user-circle text-primary"></i> Edit Profile</a
            >
            <a href="add-experience.html" class="btn btn-light"
            ><i class="fab fa-black-tie text-primary"></i> Add Experience</a
            >
            <a href="add-education.html" class="btn btn-light"
            ><i class="fas fa-graduation-cap text-primary"></i> Add Education</a
            >
        </div>

        </div>
    )
}
