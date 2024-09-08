(function execute(inputs, outputs) {
    var inputString = inputs.shortDescription;
    var pattern = /ERROR\s+([A-Za-z0-9]+)\s+ProcessMonitor\s+-\s+(CrowdStrike)/;
    var match = inputString.match(pattern);

    if (match && match.length > 2) {
        var nodeValue = match[1];
        var service = match[2];

        outputs.node_value = nodeValue;
        outputs.service = service;

        var extraArgs = {
            "limit": nodeValue
        };

        outputs.extra_args_json = JSON.stringify(extraArgs);
    } else {
        outputs.node_value = 'No node found';
        outputs.service = 'No valid service found';
        outputs.extra_args_json = '{}';
    }
})(inputs, outputs);
