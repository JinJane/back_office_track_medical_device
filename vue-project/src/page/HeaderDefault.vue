<template>
    <AppHeader fixed>
      <SidebarToggler class="d-lg-none" display="md" mobile />
      <SidebarToggler class="d-md-down-none" display="lg" :defaultOpen=true />
          <b-navbar-nav class="d-md-down-none">
         
            <b-nav-item class="px-5" active>Beacon</b-nav-item>
            <b-nav-item class="px-5">Users</b-nav-item>
            <b-nav-item class="px-5" to="./tables" exact>Log</b-nav-item>
            <b-nav-item class="px-5">Map</b-nav-item>
          </b-navbar-nav>
      <b-navbar-nav class="ml-auto"></b-navbar-nav>
        <UserDropdownDefault  class="d-none d-lg-block" />
    </AppHeader>
</template>
<script>
import { Header as AppHeader, SidebarToggler, AsideToggler } from '@coreui/vue'
import UserDropdownDefault from './UserDropdownDefault'
export default {
  name: 'DefaultHeader',
  components: {
    AsideToggler,
    AppHeader,
    UserDropdownDefault,
    SidebarToggler
  }
}
</script>

