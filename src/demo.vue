<template>
  <div class="page" style="position:relative;">
    <div id="test" class="test">test</div>
    <!--{{selected}}-->
    <!--<div style="margin: 20px;">-->
    <!--<g-table :data-source="dataSource" bordered :selected-items.sync="selected" :order-by.sync="orderBy"-->
    <!--@update:orderBy="x" :loading="loading" :height="400" expend-field="description" checkable>-->
    <!--<g-table-column text="姓名" field="name" :width="100">-->
    <!--<template slot-scope="props">-->
    <!--<a :href="`/users/${props.value}`">{{props.value}}</a>-->
    <!--</template>-->
    <!--</g-table-column>-->
    <!--<g-table-column text="分数" field="score"></g-table-column>-->
    <!--</g-table>-->
    <!--</div>-->

    <g-scroll style="width: 300px; height: 400px;">
      <p>123456789_10_11_12_13_14_15_16_17_189</p>
      <p>2</p>
      <p>3</p>
      <p>4</p>
      <p>5</p>
      <p>6</p>
      <p>7</p>
      <p>8</p>
      <p>9</p>
      <p>10</p>
      <p>11</p>
      <p>12</p>
      <p>13</p>
      <p>14</p>
      <p>15</p>
      <p>16</p>
      <p>17</p>
      <p>18</p>
      <p>19</p>
      <p>20</p>
      <p>21</p>
      <p>22</p>
      <p>23</p>
      <p>24</p>
      <p>25</p>
      <p>26</p>
      <p>27</p>
      <p>28</p>
      <p>29</p>
      <p>30</p>
      <p>31</p>
      <p>32</p>
      <p>33</p>
      <p>34</p>
      <p>35</p>
      <p>36</p>
      <p>37</p>
      <p>38</p>
      <p>39</p>
      <p>40</p>
      <p>41</p>
      <p>42</p>
      <p>43</p>
      <p>44</p>
      <p>45</p>
      <p>46</p>
      <p>47</p>
      <p>48</p>
      <p>49</p>
      <p>50</p>
      <p>51</p>
      <p>52</p>
      <p>53</p>
      <p>54</p>
      <p>55</p>
      <p>56</p>
      <p>57</p>
      <p>58</p>
      <p>59</p>
      <p>60</p>
      <p>61</p>
      <p>62</p>
      <p>63</p>
      <p>64</p>
      <p>65</p>
      <p>66</p>
      <p>67</p>
      <p>68</p>
      <p>69</p>
      <p>70</p>
      <p>71</p>
      <p>72</p>
      <p>73</p>
      <p>74</p>
      <p>75</p>
      <p>76</p>
      <p>77</p>
      <p>78</p>
      <p>79</p>
      <p>80</p>
      <p>81</p>
      <p>82</p>
      <p>83</p>
      <p>84</p>
      <p>85</p>
      <p>86</p>
      <p>87</p>
      <p>88</p>
      <p>89</p>
      <p>90</p>
      <p>91</p>
      <p>92</p>
      <p>93</p>
      <p>94</p>
      <p>95</p>
      <p>96</p>
      <p>97</p>
      <p>98</p>
      <p>99</p>
      <p>100</p>
    </g-scroll>

  </div>
</template>
<style>
  .page {
    display: flex;
    justify-content: center;
  }
  .parent {
    height: 400px;
    overflow: hidden;
    width: 400px;
    border: 5px solid red;
    box-sizing: border-box;
  }
  .child {
    border: 5px solid green;
    box-sizing: border-box;
  }
  .test {
    height: 100px; width: 100px; border: 1px solid red; position: absolute; top: 0; left: 0; z-index: 1;
  }
  .hide {
    transform: translateX(-9999px);
  }
</style>
<script>
  import GPager from './pager'
  import GTable from './table'
  import GTableColumn from './table-column'
  import GScroll from './scroll'

  let array = [
    {name: '方方', score: 100, description: 'xxxx xxxx'},
    {name: '圆圆', score: 99, description: 'yyyy yyyy'},
    {name: '张三', score: 100},
    {name: '李四', score: 99},
    {name: '超人', score: 100},
    {name: '蝙蝠侠', score: 99},
    {name: '蜘蛛侠', score: 100},
    {name: '钢铁侠', score: 99},
    {name: '方方', score: 100},
    {name: '圆圆', score: 99},
    {name: '张三', score: 100},
    {name: '李四', score: 99},
    {name: '超人', score: 100},
    {name: '蝙蝠侠', score: 99},
    {name: '蜘蛛侠', score: 100},
    {name: '钢铁侠', score: 99},
    {name: '蜘蛛侠', score: 100},
    {name: '钢铁侠', score: 99},
    {name: '方方', score: 100},
    {name: '圆圆', score: 99},
  ]
  let bigArray = []
  // for (let i = 0; i < 5; i++) {
  //   bigArray.push(...array.map((item, index) => {
  //     return {id: i * 20 + index, ...item}
  //   }))
  // }
  // console.log(bigArray)
  export default {
    name: "demo",
    components: {GPager, GTable, GTableColumn, GScroll},
    data () {
      return {
        currentPage: 1,
        selected: [],
        // columns: [
        //   {text: '姓名', field: 'name', width: 100}, // 1
        //   {text: '分数', field: 'score'},
        // ],
        orderBy: { // true - 开启排序，但是不确定asc desc
          score: 'desc'
        },
        loading: false,
        // dataSource: bigArray
      }
    },
    mounted () {
      let test = document.querySelector('#test')
      let startPosition
      let endPosition
      let isMoving = false
      let translateX = 0
      let translateY = 0
      test.addEventListener('mousedown', (e) => {
        isMoving = true
        let {screenX, screenY} = e
        startPosition = {x: screenX, y: screenY}
      })
      test.addEventListener('selectstart', (e) => {e.preventDefault()})
      document.addEventListener('mousemove', (e) => {
        if (!isMoving) { return }
        let {screenX, screenY} = e
        endPosition = {x: screenX, y: screenY}
        // delta = end - start
        let delta = {x: endPosition.x - startPosition.x, y: endPosition.y - startPosition.y}
        translateX = parseInt(translateX) + delta.x
        translateY = parseInt(translateY) + delta.y
        startPosition = endPosition
        test.style.transform = `translate(0px,${translateY}px)`

        console.log('move')
      })
      document.addEventListener('mouseup', (e) => {
        isMoving = false
      })
    },
    methods: {
      edit (item) {
        alert(`开始编辑${item.id}`)
      },
      view (item) {
        alert(`开始查看${item.id}`)
      },
      x () {
        this.loading = true
        setTimeout(() => {
          this.dataSource = this.dataSource.sort((a, b) => a.score - b.score)
          this.loading = false
        }, 3000)
      }
    }
  };
</script>
<style>
  * {margin: 0; padding: 0; box-sizing: border-box;}
  body {background: white;}
</style>
<style scoped lang="scss">
</style>
