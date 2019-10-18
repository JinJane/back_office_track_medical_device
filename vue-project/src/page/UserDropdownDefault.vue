<template>
  <AppHeaderDropdown right no-caret>
    <template slot="header">
      <img
        src="@/assets/6.jpg"
        class="img-avatar"/>
    </template>\
    <template slot="dropdown">
      <b-dropdown-item><i class="fa fa-lock" /> Logout</b-dropdown-item>
    </template>
  </AppHeaderDropdown>
</template>

<script>
import { HeaderDropdown as AppHeaderDropdown } from '@coreui/vue'
export default {
  name: 'DefaultHeaderDropdownAccnt',
  components: {
    AppHeaderDropdown
  },
  data: () => {
    return { itemsCount: 42 }
  }
}
</script>
