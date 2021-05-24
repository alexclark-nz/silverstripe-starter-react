<!doctype html>
<html lang="en">
<head>
    <% base_tag %>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta property="og:url" content="$AbsoluteLink" />
    <meta property="og:type" content="website" />
    <link rel="canonical" href="$AbsoluteLink"/>

    $MetaTags(false)
    <title><% if $MetaTitle %>$MetaTitle<% else %>$Title<% end_if %></title>
</head>
<body>
    <div>
        <% include Header %>

        $Layout

        <div id="subscribe-form" data-action="$Link('Subscribe')"></div>
        
        <% include Footer %>
    </div>
</body>
</html>
