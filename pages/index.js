import React from "react";
import Link from "next/link";
import { fetch } from "cross-fetch";
import { Nav, NavItem, NavLink } from 'reactstrap';

import styles from '../styles/styles.scss'

class Home extends React.Component {
  static async getInitialProps() {
    const meetups = await fetch(
      "https://api.meetup.com/bendjs/events?photo-host=public&page=20&sig_id=13359878&sig=d052a7d6f8ec6f8e374c2a2665e4aa724208ca5d"
    )
      .then(res => res.json())
      .then(data => Object.values(data));

    return { meetups };
  }

  render() {
    const { meetups } = this.props;
    return (
      <div>
        Hello BendJS 👋
        <div>Next Meetup: {meetups[0].name}</div>
        <Link href="/about">
          <a role="link">About</a>
        </Link>
        <Link href="/people/">
          <a role="link">Go to people</a>
        </Link>
      </div>
    );
  }
}

export default Home;
