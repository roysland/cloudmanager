<template>
  <div class="home">
    <article class="alert default" style="margin-top: 1rem;">
      <i class="material-icons">warning</i>
      <div>
        Something went wrong. <strong>Check the documentation</strong> for more info.
      </div>
      <button class="btn icon"><i class="material-icons">close</i></button>
    </article>
    <div class="flex align-center m-2">
    <button class="btn default" >Deploy manually</button>
    <button class="btn error">Deploy manually</button>
    <button class="btn primary loading"><i class="material-icons">refresh</i> manually</button>
    </div>
    <section class="panel hover">
      <h2>Deploy</h2>
      <label class="form-switch">
        <input type="checkbox">
        <span class="switch"></span>
        <span>Auto-deploy</span>
      </label>

      <hr />

      <div class="field">
        <label class="form-label">Publish directory
          <span class="tag blue">Static</span>
        </label>
        <input type="text" class="form-input" />
      </div>
    </section>
    <nav role="navigation" class="tabs vertical">
  <router-link to="/">Pricing</router-link>
  <router-link to="/about">FAQ</router-link>
  <router-link to="/use">Use cases</router-link>
  <router-link to="/docs">Docs</router-link>
</nav>

<div class="panel with-tabs">
  <nav class="panel-tabs">
    <a :class="{'active': activeTab === 'param'}" @click="activeTab = 'param'">Parameters</a>
    <a :class="{'active': activeTab === 'dns'}" @click="activeTab = 'dns'">DNS</a>
    <a :class="{'active': activeTab === 'cmd'}" @click="activeTab = 'cmd'">Command line</a>
  </nav>
  <div class="panel-body">Body</div>
</div>
<section class="panel">
  <h2 class="h2 title"> Database deployment </h2>
  <span class="date">October 15, 2020, 03:03 PM</span>
  <hr>
  <p class="text-muted"> Preparing cloud server, it can take a few minutes ☕ </p>
  <div class="progresser">
  <div class="progress">
    <div class="inner" style="width: 22%;"></div>
  </div>
    <p>22% Preparing cloud server</p>
  </div>
</section>
    <div class="panel">
    <h2>Invoices</h2>
    <f-icon icon="at-sign" />
    <table class="bordered fat">
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><span class="status success"></span>15.10.2020</td>
          <td>Monthly invoice active services</td>
          <td>$16</td>
        </tr>
        <tr>
          <td><span class="status error"></span>15.09.2020</td>
          <td>Monthly invoice active services</td>
          <td>$16</td>
        </tr>
        <tr>
          <td>15.08.2020</td>
          <td>Monthly invoice active services</td>
          <td>$16</td>
        </tr>
        <tr>
          <td>15.07.2020</td>
          <td>Monthly invoice active services</td>
          <td>$16</td>
        </tr>
      </tbody>
    </table>
    </div>

    <div class="panel">
      <ul class="menu">
        <li><router-link to="/">
          <i class="material-icons">api</i>
          <span>Dashboard</span>
        </router-link></li>
        <hr>
        <li><router-link to="/home">
          <i class="material-icons">dynamic_form</i>
          <span>Deploy</span>
        </router-link></li>
        <li><router-link to="/about">
          <i class="material-icons">eco</i>
          <span>Environment</span>
        </router-link></li>
      </ul>
    </div>

    <div class="panel">
      <h2>Event log</h2>
      <div class="event flex align-center">
        <div class="avatar red  mr-3">
          <f-icon icon="x" />
        </div>
        <div class="event-text">
          <a>Manual deploy failure</a> for commit <a>82ab580</a>
          <p class="text-muted">October 16, 2020, 10:14 AM</p>
          <p><strong>Øyvind Røysland:</strong> Deploy failed</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  data () {
    return {
      activeTab: 'dns'
    }
  }
}
</script>
