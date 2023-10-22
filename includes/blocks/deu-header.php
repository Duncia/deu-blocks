<?php

function deu_blocks_deu_header_render_cb($atts){
    ob_start();
    ?>
      <header class="container header">
        <div class="header__inner">
          <div class="header__left">
            <div class="logo">
                <a href="<?php echo pll_home_url();?>">
                  <img src="<?php echo $atts['imgUrl']; ?>" alt="<?php echo $atts['imgAlt']; ?>" width="40" height="40" >
                </a>
            </div>
            <div class="logo--text">
            <?php echo $atts['logoText']; ?>
            </div>
          </div>
          <div class="header__right">
            <nav class="header__menu" id="header__menu">
                <?php $args = array(
                'theme_location' => 'header-meniu');
                wp_nav_menu($args); ?>
            </nav>
            <div class="header__burger" id="burger">
                <div class="header__burger__middle" id="burger__middle"></div>
            </div>
          </div>
        </div>
        <div class="main-menu main-menu--close" id="main-menu">
            <nav>
                <?php $argsMain = array(
                'theme_location' => 'main-meniu');
                wp_nav_menu($argsMain); ?>
            </nav>
        </div>
      </header>
    <?php

    $output = ob_get_contents();
    ob_end_clean();

    return $output;
};