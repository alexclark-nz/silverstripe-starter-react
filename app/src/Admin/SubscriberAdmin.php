<?php


namespace App\Admin;


use App\Models\Subscriber;
use SilverStripe\Admin\ModelAdmin;

class SubscriberAdmin extends ModelAdmin
{
    private static $menu_title = 'Subscribers';

    private static $url_segment = 'subscribers';

    private static $menu_icon = "/public/images/admin/mail.svg";

    private static $managed_models = [
      Subscriber::class,
    ];
}
